import prismaClient from "../../prisma";

async function validateTitleBookUseCase(titulo: string){
    const findName = await prismaClient.livro.findFirst({
        where: {
            titulo: titulo
        }
    })
    return findName ? false : true
}

export {validateTitleBookUseCase}