function validateParamIdPublisherUseCase(id: string){
    const regex = /^\d+$/;
    const valid = regex.test(id)

    return valid
}

export {validateParamIdPublisherUseCase}