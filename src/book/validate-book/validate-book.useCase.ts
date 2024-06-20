import prismaClient from "../../prisma"

async function validateBookUseCase(id: number){
    const validId = await prismaClient.livro.findFirst({
        where: {
            id: id
        }
    })

    return validId ? true : false
}

export {validateBookUseCase}