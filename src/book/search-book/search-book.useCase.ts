import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function searchBookUseCase(req: Request, res: Response){
    try{
        const {titulo, quantidade_de_paginas, volume, id_editora, id_categoria, id_autor, autor, id_genero, genero} = req.query
        const searchResult = await prismaClient.livro.findMany({
            where: {
                titulo: {
                    contains: titulo?.toString(), 
                    mode: 'insensitive'
                },
                quantidade_de_paginas: {
                    equals: quantidade_de_paginas ? parseFloat(quantidade_de_paginas.toString()) : undefined
                },
                volume: {
                    equals: volume ? Number(volume?.toString()) : undefined
                },
                id_editora: {
                    equals: id_editora ? Number(id_editora?.toString()) : undefined
                },
                id_categoria: {
                    equals: id_categoria ? Number(id_categoria?.toString()) : undefined,  
                },
                autor_livro: autor || id_autor ? {
                    some: {
                        autor: {
                            OR: [
                                {
                                    nome: {
                                        contains: autor?.toString(),
                                        mode: 'insensitive'
                                    }
                                },
                                {
                                    id: {
                                        equals: id_autor ? Number(id_autor?.toString()) : undefined
                                    }
                                }
                            ] 
                        }
                    }
                }: undefined,
                genero_livros: genero || id_genero ? {
                    some: {
                        genero: {
                            OR: [
                                {
                                    nome: {
                                        contains: genero?.toString(),
                                        mode: 'insensitive'
                                    },
                                    id: {
                                        equals: id_genero ? Number(id_genero?.toString()) : undefined
                                    }
                                }
                            ]
                        }
                    }
                } : undefined
            },
            include: {
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
                                id: true,
                                nome: true
                            }
                        }
                    }
                },
                genero_livros: {
                    select: {
                        genero: {
                            select: {
                                id: true,
                                nome: true
                            }
                        }
                    }
                }
            }
        })
        return res.status(200).json(searchResult)
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível realizar a pesquisa`})
    }
}

export {searchBookUseCase}