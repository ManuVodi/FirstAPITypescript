import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function listUserUseCase(_: Request ,res: Response) {
    try {
        const listaUsuarios = await prismaClient.usuario.findMany();
        return res.status(200).json(listaUsuarios)
    }
    catch(error){
        console.error(error);
        return res.status(418).json({error: `Não foi possível buscar os usuários`})
    }
}

export {listUserUseCase};