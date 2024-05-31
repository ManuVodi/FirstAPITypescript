import { Request } from "express";

async function validateParamIdCategory(req: Request){
    const param = req.params.id;
    const regex = /^\d+$/;
    const valid = regex.test(param)

    return valid;
}

export {validateParamIdCategory}