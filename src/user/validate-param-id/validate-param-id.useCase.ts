import { Request, Response } from "express";

function validateParamId(req: Request, res: Response): Boolean{
    const {id} = req.params;
    const regex = /^\d+$/;
    const valid = regex.test(id);

    return valid
}

export {validateParamId};