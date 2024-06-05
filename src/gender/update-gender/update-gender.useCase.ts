import { Request, Response } from "express"
import prismaClient from "../../prisma"

async function updateGenderUseCase(req: Request, res: Response){
    try{
        const {nome} = req.body
        await prismaClient.genero.update({
            where: {
                id: +req.params.id
            },
            data: {
                nome: nome.trim().toUpperCase()
            }
        })
        return res.status(200).json({error: `Gênero atualizado!`})
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível atualizar o gênero`})
    }
}

export {updateGenderUseCase}