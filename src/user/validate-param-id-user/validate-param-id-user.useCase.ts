import { Request } from "express";

function validateParamIdUser(req: Request): Boolean{
    const {id} = req.params;
    const regex = /^\d+$/;
    const valid = regex.test(id);

    return valid
}

export { validateParamIdUser };
