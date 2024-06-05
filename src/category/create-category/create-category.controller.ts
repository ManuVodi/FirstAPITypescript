import { Request, Response, NextFunction } from "express";
import { validateNameCategoryUseCase } from "../validate-name-category/validate-name-category.useCase";

async function createCategoryController(req: Request, res: Response, next: NextFunction){
    const {nome} = req.body;
    if(typeof nome !== 'string'){
        return res.status(400).json({error: `O campo deve ser do tipo string`})
    }
    const nomeString = nome.trim().toUpperCase()
    if(!nomeString){
        return res.status(400).json({error: `Preencha o campo`});
    }
    const findName = await validateNameCategoryUseCase(nomeString)
        if(findName){
            return res.status(400).json({error: `Categoria já cadastrada`})    
        }
    next();
}

export {createCategoryController}