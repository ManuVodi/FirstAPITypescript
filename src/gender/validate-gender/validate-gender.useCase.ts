import { Request } from "express";
import prismaClient from "../../prisma";

async function validateGender(req: Request){
    const valid = await prismaClient.genero.findFirst({
        where: {
            id: +req.params.id
        }
    })
    return valid ? true : false;
}

export {validateGender}