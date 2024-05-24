import { Request, Response, NextFunction } from "express";
import prismaClient from "../../prisma";

async function updateUserController(req: Request, res: Response, next: NextFunction){
    
    try{
        await validateUser(req, res, next);
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Valores inválidos`})
    }
}

async function validateUser(req: Request, res: Response, next: NextFunction){
    try{
        const validUser = await prismaClient.usuario.findFirst({
            where: {
                id: req.body.id
            }
        })
        if(validUser){
            // próxima função
        }
        else {
            return res.status(400).json({error: `Id não encontrado`})
        }
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Usuário não encontrado`})
    }
}

module.exports = updateUserController;