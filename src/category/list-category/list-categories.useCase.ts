import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function listCatagoriesUseCase(_: Request, res: Response){
    try{
        const categoryList = await prismaClient.categoria.findMany();
        return res.status(200).json(categoryList);
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível listar as categorias`})
    }
}

export {listCatagoriesUseCase}