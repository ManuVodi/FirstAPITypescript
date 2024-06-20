import prismaClient from "../../prisma"

async function deleteRelationGenderBookUseCase(idBook: number){
    const deleteRelation = await prismaClient.genero_livros.deleteMany({
        where: {
            id_livro: idBook
        }
    })
    return deleteRelation
}

export {deleteRelationGenderBookUseCase}