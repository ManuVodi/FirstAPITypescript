import prismaClient from "../prisma"

async function authorBookUseCase(idAuthor: number, idBook: number){
    const create = await prismaClient.autor_livro.create({
        data: {
            id_autor: idAuthor,
            id_livro: idBook
        }
    })
    return create
}

export {authorBookUseCase}