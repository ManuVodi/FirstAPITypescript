import { Request, Response, NextFunction } from "express";
import { validateParamIdGenderUseCase } from "../validate-param-id-gender/validate-param-id-gender.useCase";
import { validateGenderUseCase } from "../validate-gender/validate-gender.useCase";
import { validateNameGenderUseCase } from "../validate-name-gender/validate-name-gender.useCase";

async function updateGenderController(req: Request, res: Response, next: NextFunction){
    const {nome} = req.body
    const id = req.params.id;
    if(!validateParamIdGenderUseCase(id)){
        return res.status(400).json({error: `Parâmetro inválido`})
    }
    const findId = await validateGenderUseCase(+id)
    if(!findId){
        return res.status(400).json({error: `Gênero não encontrado`})
    }
    if(typeof nome !== 'string'){
        return res.status(400).json({error: `O campo nome deve ser do tipo 'string'`})
    }
    const nameString = nome.trim()
    if(!nameString){
        return res.status(400).json({error: `O campo nome não pode ser vazio`})
    }
    try{
        const findName = await validateNameGenderUseCase(nameString)
        if(findName){
            return res.status(400).json({error: `Gênero já cadastrado!`})
        }
        next()
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível verificar o campo`})
    }
}

export {updateGenderController}