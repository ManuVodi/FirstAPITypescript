import { Request, Response, NextFunction } from "express";
import { validateParamIdAuthor } from "../validate-param-id-author/validate-param-id-author.useCase";
import { validateAuthor } from "../validate-author/validate-author.useCase";

async function deleteAuthorController(req: Request, res: Response, next: NextFunction){
    try{
        const isValidParam = await validateParamIdAuthor(req);
        if(!isValidParam){
            return res.status(400).json({error: `Parâmetro inválido`});
        }
        const existId = await validateAuthor(req);
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