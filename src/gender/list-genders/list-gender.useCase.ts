import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function listGenderUseCase(_: Request, res: Response) {
    try{
        const listOfGenders = await prismaClient.genero.findMany();
        return res.status(200).json(listOfGenders);
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível carregar a lista`})
    }
}

export {listGenderUseCase}