import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function searchAuthorUseCase(req: Request, res: Response){
    try {
        const {nome} = req.query;
        const newSearch = await prismaClient.autor.findMany({
            where: {
                nome: {contains: nome?.toString(),
                        mode: 'insensitive'
                }
            }
        })
        return res.status(400).json(newSearch)
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível verificar o envio de dados`})
    }
}

export {searchAuthorUseCase}