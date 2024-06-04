import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function searchUserUseCase(req: Request, res: Response) {
    try{
        const {nome, endereco, email, telefone} = req.query;
        const result = await prismaClient.usuario.findMany({
            where: {
                nome: {
                    contains: nome?.toString(), 
                    mode: 'insensitive'
                },
                endereco: {
                    contains: endereco?.toString(), 
                    mode: 'insensitive'
                },
                email: {
                    contains: email?.toString(), 
                    mode: 'insensitive'
                },
                telefone: {
                    contains: telefone?.toString(), 
                    mode: 'insensitive'
                }
            }
        });
        
        return res.status(200).json(result)
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível realizar a pesquisa`})
    }
}

export {searchUserUseCase};