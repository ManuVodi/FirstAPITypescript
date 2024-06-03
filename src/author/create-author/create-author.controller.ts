import { Request, Response, NextFunction } from "express";

async function createAuthorController(req: Request, res: Response, next: NextFunction) {
    const { nome } = req.body;

    if(typeof nome !== 'string'){
        return res.status(400).json({error: `O nome deve ser do tipo string`})
    }
    if(!nome.trim()){
        return res.status(400).json({error: `Preencha o campo 'nome'`})
    }
    next();
}

export {createAuthorController};