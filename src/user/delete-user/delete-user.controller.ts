import { Request, Response, NextFunction } from "express";
import { validateParamIdUserUseCase } from "../validate-param-id-user/validate-param-id-user.useCase";
import { validateUserUseCase } from "../validate-user/validate-user.useCase";

async function deleteUserController(req: Request, res: Response, next: NextFunction) {
    if(!validateParamIdUserUseCase(req)){
        return res.status(400).json({error: `Parâmetro Inválido`});
    }
    try{
        const existUser = await validateUserUseCase(req)
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