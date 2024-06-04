import { Request, Response, NextFunction } from "express";
import { validateParamIdCategoryUseCase } from "../validate-param-id-category/validate-param-id-category.useCase";
import { validateCategoryUseCase } from "../validate-category/validate-category.useCase";
import { validateNameCategoryUseCase } from "../validate-name-category/validate-name-category.useCase";

async function updateCategoryController(req: Request, res: Response, next: NextFunction){
    const {nome} = req.body
    const id = req.params.id

    if(!validateParamIdCategoryUseCase(id)){
        return res.status(400).json({error: `Parâmetro inválido`})
    }
    const findId = await validateCategoryUseCase(+id) 
    if(!findId){
        return res.status(404).json({error: `Categoria não encontrada`})
    }
    if(typeof nome !== 'string'){
        return res.status(400).json({error: `O campo nome deve ser do tipo 'string'`})
    }
    const nomeString = nome.trim()
    if(!nomeString){
        return res.status(400).json({error: `O campo 'nome' não pode ser nulo`})
    }
    
    try{
        const findName = await validateNameCategoryUseCase(nomeString)
        if(findName){
            return res.status(400).json({error: `Categoria já cadastrada`})    
        }
        next()
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível fazer a verificação dos campos`})
    }

}

export {updateCategoryController}