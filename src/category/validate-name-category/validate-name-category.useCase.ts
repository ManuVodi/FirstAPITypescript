import prismaClient from "../../prisma"

async function validateNameCategoryUseCase(nome: string){
    const findName = await prismaClient.categoria.findFirst({
        where: {
            nome: nome
        }
    })
    return findName ? true : false
}

export {validateNameCategoryUseCase}