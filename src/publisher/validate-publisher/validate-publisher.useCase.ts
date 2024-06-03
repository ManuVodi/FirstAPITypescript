import { Request,  } from "express";
import prismaClient from "../../prisma";

async function validatePublisherUseCase(req: Request){
    const findPublisher = await prismaClient.editora.findFirst({
        where: {
            id: +req.params.id
        }
    })
    return findPublisher ? true: false;
}

export {validatePublisherUseCase}