import { Request, Response, NextFunction } from "express";
import { validateAuthorUseCase } from "../validate-author/validate-author.useCase";
import { validateParamIdAuthorUseCase } from "../validate-param-id-author/validate-param-id-author.useCase";

async function deleteAuthorController(req: Request, res: Response, next: NextFunction){
    if(!validateParamIdAuthorUseCase(req)){
        return res.status(400).json({error: `Parâmetro inválido`});
    }
    try{
        const existId = await validateAuthorUseCase(req);
        if(!existId){
            return res.status(400).json({error: `Author não encontrado`}) 
        }
        next()
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível deletar o autor`})
    }
}

export {deleteAuthorController}