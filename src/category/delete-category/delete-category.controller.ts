import { Request, Response, NextFunction } from "express";
import { validateParamIdCategoryUseCase } from "../validate-param-id-category/validate-param-id-category.useCase";
import { validateCategoryUseCase } from "../validate-category/validate-category.useCase";

async function deleteCategoryController(req: Request, res: Response, next: NextFunction){
    const id = req.params.id
    if(!validateParamIdCategoryUseCase(id)){
        return res.status(400).json({error: `Parâmetro inválido`})
    }
    try {   
        const validId = await validateCategoryUseCase(+id)
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