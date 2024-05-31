import { Request } from "express";

async function validateParamAuthorId(req: Request){
    const param = req.params.id;
    const regex = /^\d+$/;
    const valid = regex.test(param)

    return valid
    
}

export {validateParamAuthorId}