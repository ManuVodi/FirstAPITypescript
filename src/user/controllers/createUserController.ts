import { Request, Response, NextFunction } from "express";

function createUserController(req: Request, res: Response, next: NextFunction) {
    const {nome, cpf, endereco, email, telefone} = req.body; 
    if (!nome || 
        !cpf || 
        !endereco || 
        !email || 
        !telefone){
            return res.status(400).json(`Preencha todos os campos`)
    }

    if (typeof nome !== 'string' || 
        typeof cpf !== 'string' ||
        typeof endereco !== 'string'||
        typeof email !== 'string'||
        typeof telefone !== 'string'){
            return res.status(400).json({error: `Os campos devem ser do tipo texto`})
    }
    next();
}

module.exports = createUserController;