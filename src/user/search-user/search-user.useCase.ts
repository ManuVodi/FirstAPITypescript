import { Request, Response, NextFunction } from "express";
import prismaClient from "../../prisma";

async function searchUserUseCase(req: Request, res: Response, next: NextFunction) {
    try{
        const {nome, endereco, email, telefone} = req.query;
        const result = await prismaClient.usuario.findMany({
            where: {
                AND: [
                    {nome: {contains: nome?.toString()}},
                    {endereco: {contains: endereco?.toString()}},
                    {email: {contains: email?.toString()}},
                    {telefone: {contains: telefone?.toString()}}
                ]
            }
        });
        
        return res.json(result)
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível realizar a pesquisa`})
    }
}

export {searchUserUseCase};