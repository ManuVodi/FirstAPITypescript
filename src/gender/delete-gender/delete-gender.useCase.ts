import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function deleteGenderUseCase(req: Request, res: Response){
    try {
        await prismaClient.genero.delete({
            where: {
                id: +req.params.id
            }
        })
        return res.status(200).json(`Gênero deletado!`)
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível deletado o gênero`})
    }
}

export {deleteGenderUseCase}