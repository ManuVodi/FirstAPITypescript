import { NextFunction, Request, Response } from "express";
import { validateParamIdCategory } from "../../category/validate-param-id-category/validate-param-id-category.useCase";
import { validateGender } from "../validate-gender/validate-gender.useCase";

async function deleteGenderController(req: Request, res: Response, next: NextFunction){
    try{
        const validParam = await validateParamIdCategory(req);
        if(!validParam){
            return res.status(400).json({error: `Parâmetro inválido`})
        }
        const validGender = await validateGender(req);
        if(!validGender){
            return res.status(400).json({error: `Gênero não encontrado`})
        }
        next();
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível verificar os parâmetros`})
    }
}

export {deleteGenderController}