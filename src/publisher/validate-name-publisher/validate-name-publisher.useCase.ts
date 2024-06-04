import prismaClient from "../../prisma";

async function validateNamePublisherUseCase(nome: string){
    const findName = await prismaClient.editora.findFirst({
        where: {
            nome: nome
        }
    })
    return findName ? true : false
}

export {validateNamePublisherUseCase}