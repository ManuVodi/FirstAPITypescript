import { Request, Response, NextFunction } from "express";

async function createAuthorController(req: Request, res: Response, next: NextFunction) {
    try{
        const { nome } = req.body;

        if (!nome){
            return res.status(400).json({error: `Preencha o campo 'nome'`})
        }
        if (typeof nome !== 'string'){
            return res.status(400).json({error: `O nome deve ser do tipo string`})
        }
        next();
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível verificar o nome`})
    }
}

export {createAuthorController};