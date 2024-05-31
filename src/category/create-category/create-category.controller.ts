import { Request, Response, NextFunction } from "express";

async function createCategoryController(req: Request, res: Response, next: NextFunction){
    const {nome} = req.body;
    if(typeof nome !== 'string'){
        return res.status(400).json({error: `O campo deve ser do tipo string`})
    }
    if(!nome.trim()){
        return res.status(400).json({error: `Preencha o campo`});
    }
    next();
}

export {createCategoryController}