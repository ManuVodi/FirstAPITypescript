function validateParamIdGenderUseCase(id: string){
    const regex = /^\d+$/;
    const valid = regex.test(id);

    return valid;
}

export {validateParamIdGenderUseCase}