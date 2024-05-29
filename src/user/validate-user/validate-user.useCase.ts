import { Request, Response } from "express";
import prismaClient from "../../prisma";

async function validateUser(req: Request){
    try{
        const validUser = await prismaClient.usuario.findFirst({
            where: {
                id: +req.params.id
            }
        })
        const valid = validUser ? true : false;
        return valid;        
    }
    catch(error){
        return false 
    }
}

export {validateUser};