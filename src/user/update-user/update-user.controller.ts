import { Request, Response, NextFunction } from "express";
import { updateUser } from "../models/interfaces/updateUser";
import { validateUser } from "../validate-user/validate-user.useCase";

async function updateUserController(req: Request, res: Response, next: NextFunction){
    try{
        await validateParam(req, res, next);
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Valores inválidos`})
    }
}

async function validateParam(req: Request, res: Response, next: NextFunction){
    const {id} = req.params;
    const regex = /^\d+$/;
    try{
        if(regex.test(id)){
            await validateCamps(req, res, next)
        }
        else {
            return res.status(400).json({error: `Parâmetro inválido`})
        }
    }
    catch(error){
        console.error(error);
        return res.status(404).json({error: `Não foi possível encontrar o parâmetro`})
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
            validateUser;
        }
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível verificar a entrada de dados`})
    }
}

export {updateUserController};