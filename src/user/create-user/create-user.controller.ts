import { Request, Response, NextFunction } from "express";
import { User } from "../models/interfaces/user";
import prismaClient from "../../prisma";

// Se eu colocar "teste" no lugar do "cpf" com todos os dados corretos,  dá erro (12) pois tenta ler um dado undefined

async function createUserController(req: Request, res: Response, next: NextFunction) {
        const {nome, cpf, endereco, email, telefone}: User = req.body; 
        const campos = [nome, cpf, endereco, email, telefone]
        
        if (campos.find(item => typeof item !== 'string')){
                return res.status(400).json({error: `Os campos devem ser do tipo texto`})
        }
        if (campos.find(item => !item.trim())){
            return res.status(400).json(`Preencha todos os campos`)
        }
        if (!validateEmail(email.trim())){
            return res.status(400).json({error: `Email inválido`})
        }
        if (!validateCPF(cpf.trim())){
            return res.status(400).json({error: `CPF inválido`})
        }

    try {
        const dontExistEmail = await existEmail(req); 
        const dontExistCPF = await existCPF(req);
        if(!dontExistEmail){
            return res.status(400).json({error: `Email já cadastrado`})
        }
        if(!dontExistCPF){
            return res.status(400).json({error: `CPF já cadastrado`})
        }
        next()
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível verificar os dados`})
    }
}

async function existEmail(req: Request){
    try {
        const findEmailByUser = await prismaClient.usuario.findFirst({
            where: {
                email: req.body.email
            }
        })
        return !findEmailByUser
    }
    catch(error){
        return false
    }
}

async function existCPF(req: Request){
    try {
        const findUserByCpf = await prismaClient.usuario.findFirst({
            where: {
                cpf: req.body.cpf
            }
        })
        return !findUserByCpf
    }
    catch(error){
        return false
    }
}

function validateCPF(cpf: string){
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
        return false;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = 11 - (sum % 11);
    let digit = (remainder >= 10) ? 0 : remainder;

    if (parseInt(cpf.charAt(9)) !== digit) {
        return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = 11 - (sum % 11);
    digit = (remainder >= 10) ? 0 : remainder;

    if (parseInt(cpf.charAt(10)) !== digit) {
        return false;
    }
    return true;
}

function validateEmail(email: string){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export {createUserController};
