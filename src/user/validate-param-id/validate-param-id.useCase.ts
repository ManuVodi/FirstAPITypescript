import { Request, Response, NextFunction } from "express";
import { validateUser } from "../validate-user/validate-user.useCase";

async function validateParam(req: Request, res: Response, next: NextFunction){
    const {id} = req.params;
    const regex = /^\d+$/;
    try{
        if(regex.test(id)){
            validateUser(req, res, next)
        }
        else {
            return res.status(400).json({error: `Parâmetro inválido`})
        }
    }
    catch(error){
        console.error(error);
        return res.status(404).json({error: `Não foi possível encontrar o parâmetro`})
    }
}

export {validateParam};