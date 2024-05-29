import { Request, Response, NextFunction } from "express";
import prismaClient from "../../prisma";

async function validateUser(req: Request, res: Response, next: NextFunction){
    try{
        const validUser = await prismaClient.usuario.findFirst({
            where: {
                id: +req.params.id
            }
        })
        if(!validUser){
            return res.status(404).json({error: `Usuário não encontrado`})
        }
        next();
    }
    catch(error){
        console.error(error);
        return res.status(404).json({error: `ID não encontrado`})
    }
}

export {validateUser};