import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function updatePublisherUseCase(req: Request, res: Response){
    try{
        const {nome} = req.body
        await prismaClient.editora.update({
            where: {
                id: +req.params.id
            },
            data: {
                nome: nome
            }
        })
        return res.status(200).json(`Editora atualizada!`)
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível atualizar a editora`})
    }
}

export {updatePublisherUseCase}