import { Request } from "express";

function validateParamId(req: Request): Boolean{
    const {id} = req.params;
    const regex = /^\d+$/;
    const valid = regex.test(id);

    return valid
}

export { validateParamId };
