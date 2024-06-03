import { Request } from "express";
import prismaClient from "../../prisma";

async function validateUserUseCase(req: Request){
    const validUser = await prismaClient.usuario.findFirst({
        where: {
            id: +req.params.id
        }
    })
    return validUser ? true : false;
}

export {validateUserUseCase};
