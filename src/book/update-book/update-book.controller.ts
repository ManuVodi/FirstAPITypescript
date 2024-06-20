import { Request, Response, NextFunction } from "express";
import { Book } from "../models/interfaces/book";
import { validateParamIdBookUseCase } from "../validate-param-id-book/validate-param-id-book.useCase";
import { validateBookUseCase } from "../validate-book/validate-book.useCase";
import { validatePublisherUseCase } from "../../publisher/validate-publisher/validate-publisher.useCase";
import { validateCategoryUseCase } from "../../category/validate-category/validate-category.useCase";
import { validateAuthorUseCase } from "../../author/validate-author/validate-author.useCase";
import { validateGenderUseCase } from "../../gender/validate-gender/validate-gender.useCase";
import { validateTitleBookUseCase } from "../validate-title-book/validate-title.book.useCase";

async function updateBookController(req: Request, res: Response, next: NextFunction){
    const {titulo, quantidade_de_paginas, volume, id_editora, id_categoria}: Book = req.body
    const campsNumber: number[] = [quantidade_de_paginas, volume, id_editora, id_categoria] 
    let arrayIdAuthor: number[] = req.body.id_autor
    let arrayIdGender: number[] = req.body.id_genero
    const id: string = req.params.id

    if(!validateParamIdBookUseCase(id)){
        return res.status(400).json({error: `Parâmetro inválido`})
    }
    const validId: boolean = await validateBookUseCase(+id)
    if(!validId){
        return res.status(404).json({error: `Livro não encontrado`})
    }
    
    if(!campsNumber.find(item => !!item) && !titulo && !arrayIdAuthor && !arrayIdGender){
        return res.status(400).json({error: `Preencha ao menos um campo`})
    }

    if(titulo){
        const tituloUpper: string = titulo.trim().toUpperCase()
        if(typeof tituloUpper !== 'string'){
            return res.status(400).json({error: `O campo 'título' deve ser do tipo string`})
        }
        const findTitle: boolean = await validateTitleBookUseCase(tituloUpper)
        if(!findTitle){
            return res.status(400).json({error: `Livro já cadastrado`})
        }
    }
    if(quantidade_de_paginas){
        if(typeof quantidade_de_paginas !== 'number'){
            return res.status(400).json({error: `O campo 'quantidade de páginas' deve ser do tipo number`})
        }
    }
    if(volume){
        if(typeof volume !== 'number'){
            return res.status(400).json({error: `O campo 'volume' deve ser do tipo number`})
        }
    }
    if(id_editora){
        if(typeof id_editora !== 'number'){
            return res.status(400).json({error: `O campo 'id_editora' deve ser do tipo number`})
        }
        const validPublisher: boolean = await validatePublisherUseCase(id_editora)
        if(!validPublisher){
            return res.status(404).json({error: `Editora não encontrada`})
        }
    }
    if(id_categoria){
        if(typeof id_categoria !== 'number'){
            return res.status(400).json({error: `O campo 'id_categoria' deve ser do tipo number`})
        }
        const validCategory: boolean = await validateCategoryUseCase(id_categoria)
        if(!validCategory){
            return res.status(404).json({error: `Categoria não encontrada`})
        }
    }
    
    if(arrayIdAuthor){
        if(arrayIdAuthor.length === undefined ||
            typeof arrayIdAuthor !== 'object' ||
            arrayIdAuthor.length === 0 ||
            arrayIdAuthor.find(item => typeof item !== 'number')){
                return res.status(400).json({error: `O campo 'id_autor' deve ser um array de números`})
        }
            
        arrayIdAuthor = [...new Set(arrayIdAuthor)];
        for(let id of arrayIdAuthor){
            let validAuthor: boolean = await validateAuthorUseCase(id)
            if (!validAuthor){
                return res.status(404).json(`Autor não encontrado`)        
            }
        }
    }
    if(arrayIdGender){
        if(arrayIdGender.length === undefined ||
            arrayIdGender.length === 0 ||
            typeof arrayIdGender !== 'object' ||
            arrayIdGender.find(item => typeof item !== 'number')){
                return res.status(400).json({error: `O campo 'id_genero' deve ser um array de números`})
        }
        arrayIdGender = [...new Set(arrayIdGender)];
        for(let id of arrayIdGender){
            let validGender: boolean = await validateGenderUseCase(id)
            if (!validGender){
                return res.status(404).json(`Gênero não encontrado`)        
            }
        }
    }
    next()
    // return res.status(200).json(`Deu boa`)
}

export {updateBookController}

// tudo que tem um ! na frente é transformado em booleano, só que, 
// apenas um exclamação vai fazer com oque o valor se torne sua negação.

//Exemplo
// const isWoman = true
// !isWoman = false

// O javascript interpreta por padrao como false os valor abaixo
// * null
// numero 0
// string vazia
// undefined


// logo sua negação ficaria true



// colocar duas exclamações faz com que ele se inverta novamente

// Exemplo
// const isWoman = true
// !!isWoman = true

// Sempre aplicado os dois exclamações para transformar valores em booleano em algumas condições que se faz necessário