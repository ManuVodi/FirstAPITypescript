import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function searchGenderUseCase(req: Request, res: Response){
    try{
        const {nome} = req.query;
        const result = await prismaClient.genero.findMany({
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
        return res.status(400).json({error: `Não foi possível realizar a pesquisa`})
    }
}

export { searchGenderUseCase }