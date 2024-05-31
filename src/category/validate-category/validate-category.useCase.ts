import { Request } from "express";
import prismaClient from "../../prisma";

async function validateCategory(req: Request){
    const valid = await prismaClient.categoria.findFirst({
        where: {
            id: +req.params.id
        }
    })

    return valid ? true : false;
}

export {validateCategory}