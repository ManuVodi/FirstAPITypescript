import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function searchPublisherUseCase(req: Request, res: Response){
    try{
        const {nome} = req.query;
        const result = await prismaClient.editora.findMany({
            where: {
                nome: {contains: nome?.toString(), 
                    mode: 'insensitive'
                }
            }
        })
        return res.status(200).json(result)
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível pesquisar a editora`})
    }
}

export {searchPublisherUseCase }