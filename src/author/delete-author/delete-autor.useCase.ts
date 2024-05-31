import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function deleteAuthorUseCase(req: Request, res: Response){
    const id = +req.params.id
    await prismaClient.autor.delete({
        where: {
            id: id
        }
    });
    return res.status(200).json(`Autor deletado!`)
}

export {deleteAuthorUseCase}