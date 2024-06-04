import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function updateCategoryUseCase(req: Request, res: Response){
     try{
        const {nome} = req.body
        await prismaClient.categoria.update({
            where: {
                id: +req.params.id
            },
            data: {
                nome: nome
            }
        })
        return res.status(200).json(`Categoria atualizada!`)
    }
    catch(error){
        console.error(error);
        return res.status(400).json(`Não foi possível atualizar a categoria!`)
    }
}

export {updateCategoryUseCase}