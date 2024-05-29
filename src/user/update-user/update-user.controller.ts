import { Request, Response, NextFunction } from "express";
import { updateUser } from "../models/interfaces/update-user";
import { validateParamId } from "../validate-param-id/validate-param-id.useCase";
import { validateUser } from "../validate-user/validate-user.useCase";

async function updateUserController(req: Request, res: Response, next: NextFunction){
    const {endereco, telefone}: updateUser = req.body;
    if(typeof endereco !== 'string' || typeof telefone !== 'string'){
        return res.status(400).json({error: `Os campos devem ser string`})
    }
    if(!endereco || !telefone){
        return res.status(400).json({error: `Preencha os campos`})
    }
    if (!validateParamId(req, res)){
        return;
    }
    try{
        await validateUser(req, res, next)
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Valores inválidos`})
    }
}

export {updateUserController};