import prismaClient from "../../prisma";

async function validateCategoryUseCase(id: number){
    const valid = await prismaClient.categoria.findFirst({
        where: {
            id: id
        }
    })

    return valid ? true : false;
}

export {validateCategoryUseCase}