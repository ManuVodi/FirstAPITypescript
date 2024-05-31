import { Request, Response, NextFunction } from "express";
import { validateParamAuthorId } from "../validate-param-id/validate-param-id.useCase";
import { validateAuthorId } from "../validate-author/validate-author.useCase";

async function deleteAuthorController(req: Request, res: Response, next: NextFunction){
    try{
        const isValidParam = await validateParamAuthorId(req);
        if(!isValidParam){
            return res.status(400).json({error: `Parâmetro inválido`});
        }
        const existId = await validateAuthorId(req);
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