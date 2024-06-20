import prismaClient from "../../prisma"

async function createRelationAuthorBookUseCase(idAuthor: number, idBook: number){
    const create = await prismaClient.autor_livro.create({
        data: {
            id_livro: idBook,
            id_autor: idAuthor
        }
    })
    return create
}

export {createRelationAuthorBookUseCase}