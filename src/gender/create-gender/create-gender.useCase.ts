import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function createGenderUseCase(req: Request, res: Response){
    try{
        const {nome} = req.body;
        await prismaClient.genero.create({
            data: {
                nome: nome.trim().toUpperCase()
            }
        })
        return res.status(200).json(`Gênero cadastrado!`)
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível cadastrar um gênero`})
    }
}

export {createGenderUseCase}