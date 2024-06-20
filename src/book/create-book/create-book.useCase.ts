import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { Book } from "../models/interfaces/book";
import { createRelationAuthorBookUseCase } from "../../author-book/create-relation-author-book/create-relation-author-book.useCase";
import { createRelationGenderBookUseCase } from "../../gender-book/create-relation-gender-book/create-relation-gender-book.useCase";

async function createBookUseCase(req: Request, res: Response){
    try{
        const {titulo, quantidade_de_paginas, volume, id_editora, id_categoria}: Book = req.body
        let arrayIdAuthor: number[] = req.body.id_autor
        let arrayIdGender: number[] = req.body.id_genero
        
        const newBook = await prismaClient.livro.create({
            data: {
                titulo: titulo.trim().toUpperCase(),
                quantidade_de_paginas,
                volume,
                id_editora,
                id_categoria
            }
        })
        if(newBook){
            arrayIdAuthor = [...new Set(arrayIdAuthor)];
            for(let id of arrayIdAuthor){
                const createRelationAuthor = await createRelationAuthorBookUseCase(id, newBook.id)
                console.log(createRelationAuthor);
            }
    
            for(let id of arrayIdGender){
                arrayIdGender = [...new Set(arrayIdGender)];
                const createRelationGender = await createRelationGenderBookUseCase(id, newBook.id)
                console.log(createRelationGender);
            }
            return res.status(200).json(`Livro cadastrado!`)
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({error: `Não foi possível cadastrar o livro`})
    }
}

export {createBookUseCase}