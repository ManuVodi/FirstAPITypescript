import prismaClient from "../../prisma";

async function validateAuthorUseCase(id: number){
    const findAuthor = await prismaClient.autor.findFirst({
        where: {
            id: id
        }
    })
    return findAuthor ? true : false;
}

export {validateAuthorUseCase};