import { Request } from "express";
import prismaClient from "../../prisma";

async function validateAuthorId(req: Request){
    const findAuthor = await prismaClient.autor.findFirst({
        where: {
            id: +req.params.id
        }
    })
    return findAuthor ? true : false;
}

export {validateAuthorId};