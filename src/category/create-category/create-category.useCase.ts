import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function createCategoryUseCase(req: Request, res: Response){
    try{
        const {nome} = req.body;
        await prismaClient.categoria.create({
            data: {
                nome: nome
            }
        })
        return res.status(400).json(`Categoria cadastrada!`)
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível cadastrar a categoria`})
    }
}

export {createCategoryUseCase}