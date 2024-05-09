import { Request, Response, NextFunction } from "express";

interface User {
    nome: string;
    cpf: string;
    endereco: string;
    email: string;
    telefone: string;
}

function teste(req: Request, res: Response, next: NextFunction){
    return res.status(200).json(`Entrou no useCase`)
}

module.exports = teste;