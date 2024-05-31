import { Request, Response } from "express";

async function validateParamIdGender(req: Request, res: Response){
    const param = req.params.id;
    const regex = /^\d+$/;
    const valid = regex.test(param);

    return valid;
}

export {validateParamIdGender}