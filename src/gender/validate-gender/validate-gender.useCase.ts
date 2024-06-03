import { Request } from "express";
import prismaClient from "../../prisma";

async function validateGenderUseCase(req: Request){
    const valid = await prismaClient.genero.findFirst({
        where: {
            id: +req.params.id
        }
    })
    return valid ? true : false;
}

export {validateGenderUseCase}