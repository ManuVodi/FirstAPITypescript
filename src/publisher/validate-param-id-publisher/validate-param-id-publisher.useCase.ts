import { Request } from "express";

function validateParamIdPublisherUseCase(req: Request){
    const param = req.params.id;
    const regex = /^\d+$/;
    const valid = regex.test(param)

    return valid
}

export {validateParamIdPublisherUseCase}