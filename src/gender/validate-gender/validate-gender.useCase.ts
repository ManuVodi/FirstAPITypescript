import prismaClient from "../../prisma";

async function validateGenderUseCase(id: number){
    const valid = await prismaClient.genero.findFirst({
        where: {
            id: id
        }
    })
    return valid ? true : false;
}

export {validateGenderUseCase}