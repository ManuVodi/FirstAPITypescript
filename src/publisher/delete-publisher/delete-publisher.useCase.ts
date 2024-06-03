import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function deletePublisherUseCase(req: Request, res: Response){
    try{
        await prismaClient.editora.delete({
            where: {
                id: +req.params.id
            }
        })
        return res.status(200).json(`Editora deletada!`)
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível deletar a editora`})
    }
}

export {deletePublisherUseCase}