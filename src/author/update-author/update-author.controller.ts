import { Request, Response, NextFunction } from "express";
import { validateParamIdAuthorUseCase } from "../validate-param-id-author/validate-param-id-author.useCase";
import { validateAuthorUseCase } from "../validate-author/validate-author.useCase";
import { validateNameAuthorUseCase } from "../validate-name-author/validate-name-author.useCase";

async function updateAuthorController(req: Request, res: Response, next: NextFunction){
    const {nome} = req.body
    const id = req.params.id

    if(!validateParamIdAuthorUseCase(id)){
        return res.status(400).json({error: `Parâmetro inválido`})
    }
    const findId = await validateAuthorUseCase(+id)
    if(!findId){
        return res.status(404).json({error: `Autor não encontrado`})
    }
    if(typeof nome !== 'string'){
        return res.status(400).json({error: `O campo nome deve ser do tipo 'string'`})
    }
    const nomeString = nome.trim()
    if(!nomeString){
        return res.status(400).json({error: `O campo nome não pode ser vazio`})
    }
    try{
        const findName = await validateNameAuthorUseCase(nomeString)
        if(findName){
            return res.status(400).json({error: `Autor já cadastrado`})
        }
        next()
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível verificar os campos`})
    }
}

export { updateAuthorController}