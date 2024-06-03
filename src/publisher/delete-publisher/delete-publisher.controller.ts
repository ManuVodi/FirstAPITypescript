import { Request, Response, NextFunction } from "express";
import { validateParamIdPublisherUseCase } from "../validate-param-id-publisher/validate-param-id-publisher.useCase";
import { validatePublisherUseCase } from "../validate-publisher/validate-publisher.useCase";

async function deletePublisherController(req: Request, res: Response, next: NextFunction){
    if(!validateParamIdPublisherUseCase(req)){
        return res.status(400).json({error: `Parâmetro inválido`})
    }
    try{
        const validId = await validatePublisherUseCase(req);
        if(!validId){
            return res.status(400).json({error: `Editora não encontrada`})
        }
        next()
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível verificar o parâmetro de entrada`})
    }
}

export {deletePublisherController}