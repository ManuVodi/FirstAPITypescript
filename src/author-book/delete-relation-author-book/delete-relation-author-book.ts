import prismaClient from "../../prisma"

async function deleteRelationAuthorBookUseCase(idBook: number){
    const deleteRelation = await prismaClient.autor_livro.deleteMany({
        where: {
            id_livro: idBook
        }
    })
    return deleteRelation
}

export {deleteRelationAuthorBookUseCase}