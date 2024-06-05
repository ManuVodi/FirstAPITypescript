import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { Book } from "../models/interfaces/create-book";
import { authorBookUseCase } from "../../author-book/author-book.useCase";
import { genderBookUseCase } from "../../gender-book/gender-book.useCase";

async function createBookUseCase(req: Request, res: Response){
    try{
        const {titulo, quantidade_de_paginas, volume, id_editora, id_categoria}: Book = req.body
        const arrayIdAuthor: number[] = req.body.id_autor
        const arrayIdGender: number[] = req.body.id_genero
        
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
            for(let id of arrayIdAuthor){
                const createRelationAuthor = await authorBookUseCase(id, newBook.id)
                console.log(createRelationAuthor);
            }
    
            for(let id of arrayIdGender){
                const createRelationGender = await genderBookUseCase(id, newBook.id)
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