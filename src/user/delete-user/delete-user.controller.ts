import { Request, Response, NextFunction } from "express";
import { validateParamIdUser } from "../validate-param-id-user/validate-param-id-user.useCase";
import { validateUser } from "../validate-user/validate-user.useCase";

async function deleteUserController(req: Request, res: Response, next: NextFunction) {
    if(!validateParamIdUser(req)){
        return res.status(400).json({error: `Parâmetro Inválido`});
    }
    try{
        const existUser = await validateUser(req)
        if (!existUser){ 
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