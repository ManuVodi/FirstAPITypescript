import { Response } from "express";
import prismaClient from "../../prisma";

async function listUserUseCase(req: Request, res: Response) {
    try {
        const listaUsuarios = await prismaClient.usuario.findMany();

        return res.status(200).json(listaUsuarios)
    }
    catch(error){
        console.error(error);
        return res.status(418).json({error: `Não sei que tipo de erro é. Entrou no useCase para listar os usuários mas não deu boa`})
    }
}

module.exports = listUserUseCase;