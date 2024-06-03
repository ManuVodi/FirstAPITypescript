import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function listPublisherUseCase(_: Request, res: Response){
    try{
        const listPublishers = await prismaClient.editora.findMany()
        return res.status(200).json(listPublishers)
    }
    catch(error){
        console.error(error);
        return res.status(400).json(`Não foi possível listar as editoras`)
    }
}

export {listPublisherUseCase}