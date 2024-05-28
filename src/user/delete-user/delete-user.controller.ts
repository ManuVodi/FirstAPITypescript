import { Request, Response, NextFunction } from "express";
import { validateParam } from "../validate-param-id/validate-param-id.useCase";

async function deleteUserController(req: Request, res: Response, next: NextFunction) {
    try{
        const id = +req.params.id;
        
        if (!id){
            return res.status(400).json({error: `Informe o ID do usuário`})
        }
        else {
            validateParam(req, res, next)
        }
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível verificar o usuário`})
    }
}

export {deleteUserController};