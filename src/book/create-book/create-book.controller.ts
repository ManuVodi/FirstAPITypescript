import { Request, Response, NextFunction } from "express";
import { Book } from "../models/interfaces/create-book";
import { validateTypeBook } from "../validate-type-book/validate-type-book.useCase";
import { validateEmptyCampsBookUseCase } from "../validate-empty-camps-book/validate-empty-camps-book.useCase";
import { validateAuthorUseCase } from "../../author/validate-author/validate-author.useCase";
import { validateGenderUseCase } from "../../gender/validate-gender/validate-gender.useCase";
import { validateTitleBookUseCase } from "../validate-title-book/validate-title.book.useCase";
import { validateCategoryUseCase } from "../../category/validate-category/validate-category.useCase";
import { validatePublisherUseCase } from "../../publisher/validate-publisher/validate-publisher.useCase";

async function createBookController(req: Request, res: Response, next: NextFunction){
    const {titulo, quantidade_de_paginas, volume, id_editora, id_categoria}: Book = req.body
    const campsNumber = [quantidade_de_paginas, volume, id_editora, id_categoria]
    const arrayIdAuthor: number[] = req.body.id_autor
    const arrayIdGender: number[] = req.body.id_genero

    if(!validateEmptyCampsBookUseCase(campsNumber, titulo, arrayIdAuthor, arrayIdGender)){
        return res.status(400).json({error: `Os campos 'titulo', 'id_autor', 'quantidade_de_paginas', 'volume', 'id_editora' e 'id_categoria' e 'id_genero' devem ser preenchidos`})
    }
    
    if(!validateTypeBook(campsNumber, titulo, arrayIdAuthor, arrayIdGender)){
        return res.status(400).json({error: `Os campos 'quantidade_de_paginas', 'volume', 'id_editora' e 'id_categoria' devem ser do tipo number. O campo 'titulo' deve ser do tipo string. E os campos 'id_autor' e 'id_genero' devem ser um array`})
    }

    const existBook = await validateTitleBookUseCase(titulo.trim().toUpperCase())
    if(!existBook){
        return res.status(400).json({error: `Livro já cadastrado`})
    }

    for(let id of arrayIdAuthor){
        let validAuthor = await validateAuthorUseCase(id)
        if (!validAuthor){
            return res.status(404).json(`Autor não encontrado`)        
        }
    }

    const validPublisher = await validatePublisherUseCase(id_editora)
    if(!validPublisher){
        return res.status(404).json(`Editora não encontrada`) 
    }

    const validCategory = await validateCategoryUseCase(id_categoria)
    if(!validCategory){
        return res.status(404).json(`Categoria não encontrada`) 
    }
    
    for(let id of arrayIdGender){
        let validGender = await validateGenderUseCase(id)
        if (!validGender){
            return res.status(404).json(`Gênero não encontrado`)        
        }
    }
    
    next()
}

export {createBookController}