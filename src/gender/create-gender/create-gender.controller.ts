import { Request, Response, NextFunction } from "express";
import { validateNameGenderUseCase } from "../validate-name-gender/validate-name-gender.useCase";

async function createGenderController(req: Request, res: Response, next: NextFunction){   
    const {nome} = req.body;
    if(typeof nome !== 'string'){
        return res.status(400).json({error: `O campo deve ser do tipo string`})
    }
    const nomeString = nome.trim().toUpperCase()
    if(!nomeString){
        return res.status(400).json({error: `Preencha o campo`})
    }
    const findName = await validateNameGenderUseCase(nomeString)
        if(findName){
            return res.status(400).json({error: `Gênero já cadastrado!`})
        }
    next();
}

export {createGenderController}