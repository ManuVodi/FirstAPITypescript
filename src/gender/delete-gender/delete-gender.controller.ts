import { NextFunction, Request, Response } from "express";
import { validateParamIdGenderUseCase } from "../validate-param-id-gender/validate-param-id-gender.useCase";
import { validateGenderUseCase } from "../validate-gender/validate-gender.useCase";

async function deleteGenderController(req: Request, res: Response, next: NextFunction){
    if(!validateParamIdGenderUseCase(req)){
        return res.status(400).json({error: `Parâmetro inválido`})
    }
    try{
        const validGender = await validateGenderUseCase(req);
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