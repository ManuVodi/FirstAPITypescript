import { Request, Response, NextFunction } from "express";
import prismaClient from "../../prisma";

async function listUserController(req: Request, res: Response, next: NextFunction){
    try {
        const listaUsuarios = await prismaClient.usuario.findMany();
        if (listaUsuarios.length === 0) {
            return res.status(401).json(`Não existem usuários cadastrados`);
        }
        next(); 
    }
    catch(error){
        console.error(error);
        return res.status(404).json({error: `Lista não encontrada`})
    }
}

module.exports = listUserController;