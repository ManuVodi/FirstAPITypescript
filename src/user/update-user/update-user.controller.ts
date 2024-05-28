import { Request, Response, NextFunction } from "express";
import { updateUser } from "../models/interfaces/update-user";
import { validateParam } from "../validate-param-id/validate-param-id.useCase";

async function updateUserController(req: Request, res: Response, next: NextFunction){
    try{
        await validateCamps(req, res, next);
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Valores inválidos`})
    }
}

async function validateCamps(req: Request, res: Response, next: NextFunction){
    try{
        const {endereco, telefone}: updateUser = req.body;
        if(typeof endereco !== 'string' || typeof telefone !== 'string'){
            return res.status(400).json({error: `Preencha corretamente os campos`})
        }
        if(!endereco || !telefone){
            return res.status(400).json({error: `Preencha os campos`})
        }
        else {
            validateParam(req, res, next);
        }
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível verificar a entrada de dados`})
    }
}

export {updateUserController};