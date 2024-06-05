import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function createPublisherUseCase(req: Request, res: Response){
    try{
        const {nome} = req.body;
        await prismaClient.editora.create({
            data: {
                nome: nome.trim().toUpperCase()
            }
        })
        return res.status(200).json(`Editora cadastrada!`)
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível cadastrar a editora`})
    }
}

export {createPublisherUseCase}