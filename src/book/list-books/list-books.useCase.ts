import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function listBooksUseCase(_: Request, res: Response){
    try{
        const listBooks = await prismaClient.livro.findMany({
            select: {
                id: true,
                titulo: true,
                quantidade_de_paginas: true,
                volume: true,
                editora: {
                    select: {
                        nome: true
                    }
                },
                categoria: {
                    select: {
                        nome: true
                    }
                },
                
                autor_livro: {
                    select: {
                        autor: {
                            select: {
                                nome: true
                            }
                        }
                    }
                },
                genero_livros: {
                    select: {
                        genero: {
                            select: {
                                nome: true
                            }
                        }
                    }
                }
            }     
        })
        
        const formattedBooks = listBooks.map(book => ({
            ...book,
            editora: book.editora?.nome,
            categoria: book.categoria?.nome,
            autor_livro: book.autor_livro.map(authorRelation => ({ nome: authorRelation.autor.nome })),
            genero_livros: book.genero_livros.map(genderRelation => ({ nome: genderRelation.genero.nome }))
        }));

        return res.status(200).json(formattedBooks);
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({error: `Não foi possível listar os livros`})
    }
}

export {listBooksUseCase}