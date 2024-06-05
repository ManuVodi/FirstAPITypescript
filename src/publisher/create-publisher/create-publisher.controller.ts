import { Request, Response, NextFunction } from "express";
import { validateNamePublisherUseCase } from "../validate-name-publisher/validate-name-publisher.useCase";

async function createPublisherController(req: Request, res: Response, next: NextFunction){
    const {nome} = req.body;

    if(typeof nome !== 'string'){
        return res.status(400).json({error: `O campo deve ser do tipo string`})
    }
    const nameString = nome.trim().toUpperCase()
    if(!nameString){
        return res.status(400).json({error: `Preencha o campo`})
    }
    const findName = await validateNamePublisherUseCase(nameString)
        if(findName){
            return res.status(400).json({error: `Editora já cadastrada`})
        }
    next()
}

export {createPublisherController}