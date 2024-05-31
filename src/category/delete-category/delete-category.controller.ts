import { Request, Response, NextFunction } from "express";
import { validateParamIdCategory } from "../validate-param-id-category/validate-param-id-category.useCase";
import { validateCategory } from "../validate-category/validate-category.useCase";

async function deleteCategoryController(req: Request, res: Response, next: NextFunction){
    try {
        const validParam = await validateParamIdCategory(req, res)
        if(!validParam){
            return res.status(400).json({error: `Parâmetro inválido`})
        }
        const validId = await validateCategory(req)
        if(!validId){
            return res.status(400).json({error: `Categoria não encontrada`})
        }
        next()
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível verificar os parâmetros`})
    }
}

export {deleteCategoryController}