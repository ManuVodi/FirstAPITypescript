import { Request, Response, NextFunction } from "express";
import prismaClient from "../../prisma";

async function deleteUserUseCase(req: Request, res: Response, next: NextFunction) {
    try{
        const id = +req.params.id;
        const newDelete = await prismaClient.usuario.delete({
            where: {
                id: id
            }
        });

        return res.status(200).json({erro: `Usuário deletado`})
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível deletar o usuário`})
    }
}

export {deleteUserUseCase}