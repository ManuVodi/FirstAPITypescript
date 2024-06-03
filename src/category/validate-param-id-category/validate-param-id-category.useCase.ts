import { Request } from "express";

function validateParamIdCategoryUseCase(req: Request){
    const param = req.params.id;
    const regex = /^\d+$/;
    const valid = regex.test(param)

    return valid;
}

export {validateParamIdCategoryUseCase}