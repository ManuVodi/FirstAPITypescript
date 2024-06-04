import { Request, Response, NextFunction } from "express";
import { validateParamIdPublisherUseCase } from "../validate-param-id-publisher/validate-param-id-publisher.useCase";
import { validatePublisherUseCase } from "../validate-publisher/validate-publisher.useCase";
import { validateNamePublisherUseCase } from "../validate-name-publisher/validate-name-publisher.useCase";

async function updatePublisherController(req: Request, res: Response, next: NextFunction){
    const {nome} = req.body;
    const id = req.params.id
    if(!validateParamIdPublisherUseCase(id)){
        return res.status(400).json({error: `Parâmetro inválido`})
    }
    const findId = await validatePublisherUseCase(+id)

    if(!findId){
        return res.status(404).json({error: `Editora não encontrada`})
    }

    if(typeof nome !== 'string'){
        return res.status(400).json({error: `Preencha o campo corretamente`})
    }
    const nameString = nome.trim()
    if(!nameString){
        return res.status(400).json({error: `Preencha o campo`})
    }
    try{
        const findName = await validateNamePublisherUseCase(nameString)
        if(findName){
            return res.status(400).json({error: `Editora já cadastrada`})
        }
        next()
    }
    catch(error){
        console.error(error);
        return res.status(400).json({error: `Não foi possível verificar os campos`})
    }
}

export {updatePublisherController}