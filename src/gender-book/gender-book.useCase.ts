import prismaClient from "../prisma"

async function genderBookUseCase(idGender: number, idBook: number){
    const create = await prismaClient.genero_livros.create({
        data: {
            id_genero: idGender,
            id_livro: idBook
        }
    })
    return create
}

export {genderBookUseCase}