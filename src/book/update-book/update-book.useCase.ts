import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { Book } from "../models/interfaces/book";
import { deleteRelationAuthorBookUseCase } from "../../author-book/delete-relation-author-book/delete-relation-author-book";
import { deleteRelationGenderBookUseCase } from "../../gender-book/delete-relation-gender-book/delete-relation-gender-book.useCase";
import { createRelationAuthorBookUseCase } from "../../author-book/create-relation-author-book/create-relation-author-book.useCase";
import { createRelationGenderBookUseCase } from "../../gender-book/create-relation-gender-book/create-relation-gender-book.useCase";

async function updateBookUseCase(req: Request, res: Response){
    try{
        const {titulo, quantidade_de_paginas, volume, id_editora, id_categoria}: Book = req.body
        let arrayIdAuthor: number[] = req.body.id_autor
        let arrayIdGender: number[] = req.body.id_genero
        arrayIdAuthor = [...new Set(arrayIdAuthor)];
        arrayIdGender = [...new Set(arrayIdGender)];

        const newUpdateBook = await prismaClient.livro.update({
            where: {
                id: +req.params.id
            },
            data: {
                ...(titulo && {titulo: titulo.trim().toUpperCase()}),
                quantidade_de_paginas,
                volume, 
                id_editora,
                id_categoria
            }
        })

        if(newUpdateBook){
            for(let id of arrayIdAuthor){
                await deleteRelationAuthorBookUseCase(newUpdateBook.id)
                const updateRelationAuthor = await createRelationAuthorBookUseCase(id, newUpdateBook.id)
                console.log(updateRelationAuthor);
                }
                for(let id of arrayIdGender){
                await deleteRelationGenderBookUseCase(newUpdateBook.id)
                const updateRelationGender = await createRelationGenderBookUseCase(id, newUpdateBook.id)
                console.log(updateRelationGender);
            }
        }

        return res.status(200).json(`Livro atualizado`)
    }
    catch(error){
        console.error(error);
        return res.status(400).json(`Não foi possível atualizar os dados do livro`)
    }
}

export {updateBookUseCase}