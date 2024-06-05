import { Request, Response, NextFunction } from "express";
import { validateNameAuthorUseCase } from "../validate-name-author/validate-name-author.useCase";

async function createAuthorController(req: Request, res: Response, next: NextFunction) {
    const { nome } = req.body;

    if(typeof nome !== 'string'){
        return res.status(400).json({error: `O nome deve ser do tipo string`})
    }
    const nomeString = nome.trim().toUpperCase()
    if(!nomeString){
        return res.status(400).json({error: `Preencha o campo 'nome'`})
    }
    const findName = await validateNameAuthorUseCase(nomeString)
        if(findName){
            return res.status(400).json({error: `Autor já cadastrado`})
        }
    next();
}

export {createAuthorController};