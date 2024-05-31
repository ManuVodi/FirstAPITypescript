import { Request, Response, NextFunction } from "express";
import { updateUser } from "../models/interfaces/update-user";
import { validateParamId } from "../validate-param-id/validate-param-id.useCase";
import { validateUser } from "../validate-user/validate-user.useCase";

// Preciso que quando o campo estiver UNDEFINED não tente por o "trim()" nele mas quando existir, coloque

async function updateUserController(req: Request, res: Response, next: NextFunction){
    const {endereco, telefone}: updateUser = req.body;
    
    if(!endereco && !telefone){
        return res.status(400).json({error: `Preencha ao menos um campo`})
    }

    if (endereco){
        const noSpaceAdress = endereco.trim()
        if (typeof endereco !== 'string') {
            return res.status(400).json({error: `O campo endereço deve ser string`})
        }
        if (!noSpaceAdress) {
            return res.status(400).json({error: "O campo endereço não pode ser vazio"})
        }
    }

    if(telefone){
        const noSpaceNumber = telefone.trim()
        if (typeof telefone !== 'string') {
            return res.status(400).json({error: `O campo telefone deve ser string`})
        }
        if (!noSpaceNumber) {
            return res.status(400).json({error: "O campo telefone não pode ser vazio"})
        }
    }

    
    if (!validateParamId(req)){
        return res.status(400).json({error: `Parâmetro inválido`});
    }
    try{
        const result = await validateUser(req)  
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