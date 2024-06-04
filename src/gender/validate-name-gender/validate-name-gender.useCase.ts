import prismaClient from "../../prisma"

async function validateNameGenderUseCase(nome: string){
    const findName = await prismaClient.genero.findFirst({
        where: {
            nome: nome
        }
    })
    return findName ? true : false
}

export {validateNameGenderUseCase}