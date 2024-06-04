import prismaClient from "../../prisma";

async function validatePublisherUseCase(id: number){
    const findPublisher = await prismaClient.editora.findFirst({
        where: {
            id: id
        }
    })
    return findPublisher ? true: false;
}

export {validatePublisherUseCase}