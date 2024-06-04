import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function updateAuthorUseCase(req: Request, res: Response){
    try{
        const {nome} = req.body
        await prismaClient.autor.update({
            where: {
                id: +req.params.id
            },
            data: {
                nome: nome
            }
        })
        return res.status(200).json({error: `Autor atualizado`})
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível atualizar o autor`})
    }
}

export {updateAuthorUseCase}