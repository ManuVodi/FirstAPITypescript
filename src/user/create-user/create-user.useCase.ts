import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { User } from "../models/interfaces/user";

async function createUserUseCase(req: Request, res: Response){
    try {
        const {nome, cpf, endereco, email, telefone}: User = req.body;
        
        await prismaClient.usuario.create({
            data: {
                nome,
                cpf,
                endereco,
                email,
                telefone,
            }
        });
        return res.status(200).json(`Usuário cadastrado com sucesso!`)
    }
    catch (error) {
        console.error(error);
        return res.status(422).json({error: `Erro ao criar usuário`})
    }
}

export {createUserUseCase};