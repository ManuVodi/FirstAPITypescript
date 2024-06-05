import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function createAuthorUseCase(req: Request, res: Response){
    try{
        const nome = req.body.nome;
        await prismaClient.autor.create({
                data: {
                    nome: nome.trim().toUpperCase()
                }
            })
        return res.status(200).json(`Autor cadastrado!`)
    }
    catch(error){
        console.error(error);
        return res.status(400).json(`Não foi possível cadastrar o autor`)
    }
}

export {createAuthorUseCase};
