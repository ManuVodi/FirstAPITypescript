import { Request, Response, NextFunction } from "express";
import { validateParamId } from "../validate-param-id/validate-param-id.useCase";
import { validateUser } from "../validate-user/validate-user.useCase";

async function deleteUserController(req: Request, res: Response, next: NextFunction) {
    if(!validateParamId(req, res)){
        return;
    }
    try{
        const result = await validateUser(req)
        if (!result){ 
            return res.status(404).json({error: `Usuário não encontrado`})
        }
        next()
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível verificar o usuário`})
    }
}

export {deleteUserController};