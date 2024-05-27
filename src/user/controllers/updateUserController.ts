import { Request, Response, NextFunction } from "express";
import prismaClient from "../../prisma";
import { updateUser } from "../models/interfaces/updateUser";

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
            await validateUser(req, res, next)
        }
        else {
            return res.status(400).json({error: `Parâmetro inválido`})
        }
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível encontrar o parâmetro`})
    }
}

async function validateUser(req: Request, res: Response, next: NextFunction){
    try{
        const validUser = await prismaClient.usuario.findFirst({
            where: {
                id: +req.params.id
            }
        })
        if(validUser){
            validateCamps(req, res, next)
        }
        else {
            return res.status(404).json({error: `Usuário não encontrado`})
        }
    }
    catch(error){
        console.error(error);
        return res.status(404).json({error: `ID não encontrado`})
    }
}

async function validateCamps(req: Request, res: Response, next: NextFunction){
    try{
        const {endereco, telefone}: updateUser = req.body;
        if(typeof endereco !== 'string' || typeof telefone !== 'string'){
            return res.status(400).json({error: `Preencha corretamente os campos`})
        }
        if(!endereco || !telefone){
            return res.status(400).json({error: `Não é possível deixar os campos nulos`})
        }
        else {
            next()
        }
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível verificar a entrada de dados`})
    }
}

export {updateUserController};