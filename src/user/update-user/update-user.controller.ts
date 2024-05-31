import { Request, Response, NextFunction } from "express";
import { updateUser } from "../models/interfaces/update-user";
import { validateParamId } from "../validate-param-id/validate-param-id.useCase";
import { validateUser } from "../validate-user/validate-user.useCase";

async function updateUserController(req: Request, res: Response, next: NextFunction){
    const {endereco, telefone}: updateUser = req.body;
    
    if(!(typeof endereco == 'string' || !endereco) || 
        !(typeof telefone == 'string' || !telefone)){
        return res.status(400).json({error: `Os campos devem ser string`})
    }

    if(!endereco && !telefone){
        return res.status(400).json({error: `Preencha ao menos um campo`})
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