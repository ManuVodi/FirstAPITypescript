import { Request, Response, NextFunction } from "express";
import prismaClient from "../../prisma";
import { error } from "console";

// Validar os campos que querem ser alterados (endereco e telefone)
// - Validar se existe o usuário
// Validar se os novos valores serão do tipo certo 
// Validar se os novos valores serão nulos
// Marcar data e hora da alteração -- Use Case

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
            // use case
            return res.status(200).json(`Usuário Encontrado`)
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
export {updateUserController};