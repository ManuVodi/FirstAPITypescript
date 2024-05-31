import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function listAuthorUseCase(_: Request, res: Response){
    try{
        const listAuthors = await prismaClient.autor.findMany()
        return res.status(200).json(listAuthors)
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível carregar a lista de autores`})
    }
}

export {listAuthorUseCase}