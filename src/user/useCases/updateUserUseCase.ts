import { Request, Response, NextFunction } from "express";

function updateUserUseCase(req: Request, res: Response, next: NextFunction){
    return res.status(200).json(`Entrou no useCase`)
}

export {updateUserUseCase};