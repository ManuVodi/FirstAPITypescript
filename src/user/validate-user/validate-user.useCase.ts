import prismaClient from "../../prisma";

async function validateUserUseCase(id: number){
    const validUser = await prismaClient.usuario.findFirst({
        where: {
            id: id
        }
    })
    return validUser ? true : false;
}

export {validateUserUseCase};
