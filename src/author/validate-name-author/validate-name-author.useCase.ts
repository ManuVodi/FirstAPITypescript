import prismaClient from "../../prisma"

async function validateNameAuthorUseCase(nome: string){
    const findName = await prismaClient.autor.findFirst({
        where: {
            nome: nome
        }
    })
    return findName ? true : false
}

export {validateNameAuthorUseCase}