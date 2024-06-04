import { Request, Response, NextFunction } from "express";
import { updateUser } from "../models/interfaces/update-user";
import { validateParamIdUserUseCase } from "../validate-param-id-user/validate-param-id-user.useCase";
import { validateUserUseCase } from "../validate-user/validate-user.useCase";

async function updateUserController(req: Request, res: Response, next: NextFunction){
    const {endereco, telefone}: updateUser = req.body;
    
    if(!endereco && !telefone){
        return res.status(400).json({error: `Preencha ao menos um campo`})
    }

    if (endereco){
        if (typeof endereco !== 'string') {
            return res.status(400).json({error: `O campo endereço deve ser string`})
        }
        const noSpaceAdress = endereco.trim()
        if (!noSpaceAdress) {
            return res.status(400).json({error: "O campo endereço não pode ser vazio"})
        }
    }

    if(telefone){
        if (typeof telefone !== 'string') {
            return res.status(400).json({error: `O campo telefone deve ser string`})
        }
        const noSpaceNumber = telefone.trim()
        if (!noSpaceNumber) {
            return res.status(400).json({error: "O campo telefone não pode ser vazio"})
        }
    }

    const id = req.params.id
    if (!validateParamIdUserUseCase(id)){
        return res.status(400).json({error: `Parâmetro inválido`});
    }
    try{
        const result = await validateUserUseCase(+id)  
        if (!result){ 
            return res.status(404).json({error: `Usuário não encontrado`})
        }
        next()
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Valores inválidos`})
    }
}

export {updateUserController};