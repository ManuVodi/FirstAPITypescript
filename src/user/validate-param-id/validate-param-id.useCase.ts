import { Request, Response } from "express";

function validateParamId(req: Request, res: Response): Boolean{
    const {id} = req.params;
    const regex = /^\d+$/;
    const valid = regex.test(id);

    if(!valid){
        res.status(400).json({error: `Parâmetro inválido`})
        return false
    }
    return true
}

export {validateParamId};