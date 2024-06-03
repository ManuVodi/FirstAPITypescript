import { Request } from "express";

function validateParamIdUserUseCase(req: Request){
    const id = req.params.id;
    const regex = /^\d+$/;
    const valid = regex.test(id);

    return valid
}

export {validateParamIdUserUseCase};
