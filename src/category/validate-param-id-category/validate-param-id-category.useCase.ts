import { Request } from "express";

function validateParamIdCategoryUseCase(id: string){
    const regex = /^\d+$/;
    const valid = regex.test(id)

    return valid;
}

export {validateParamIdCategoryUseCase}