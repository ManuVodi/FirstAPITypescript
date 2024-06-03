import { Request } from "express";

function validateParamIdAuthorUseCase(req: Request){
    const param = req.params.id;
    const regex = /^\d+$/;
    const valid = regex.test(param)

    return valid
    
}

export {validateParamIdAuthorUseCase}