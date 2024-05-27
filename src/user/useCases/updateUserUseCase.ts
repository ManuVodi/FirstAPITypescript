import { Request, Response } from "express";
import { updateUser } from "../models/interfaces/updateUser";
import prismaClient from "../../prisma";

async function updateUserUseCase(req: Request, res: Response){
    try{
        const {endereco, telefone}: updateUser = req.body;

        const newUpdate = await prismaClient.usuario.update({
            where: {
                id: +req.params.id
            },
            data: {
                endereco,
                telefone,
            }
        });
        return res.status(200).json(`Usuário atualizado com sucesso`)
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível atualizar os dados do usuário`})
    }
}

export {updateUserUseCase};