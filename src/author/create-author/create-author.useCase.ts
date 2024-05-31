import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function createAuthorUseCase(req: Request, res: Response){
    const nome = req.body.nome;
    await prismaClient.autor.create({
            data: {
                nome
            }
        })
    return res.status(200).json(`Autor cadastrado!`)
}

export {createAuthorUseCase};
