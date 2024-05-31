import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function deleteCategoryUseCase(req: Request, res: Response){
    try{
        await prismaClient.categoria.delete({
            where: {
                id: +req.params.id
            }
        })

        return res.status(200).json(`Categoria deletada!`)
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível deletar a categoria`})
    }
}

export {deleteCategoryUseCase}