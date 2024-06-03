import { Request } from "express";

function validateParamIdGenderUseCase(req: Request){
    const param = req.params.id;
    const regex = /^\d+$/;
    const valid = regex.test(param);

    return valid;
}

export {validateParamIdGenderUseCase}