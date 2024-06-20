function validateEmptyCampsBookUseCase(campsNumber: number[], titulo: string, arrayIdAuthor: number[], arrayIdGender: number[]){
    return !campsNumber.some(item => !!item) ||
        !titulo ||
        arrayIdAuthor.length === undefined ||
        arrayIdAuthor.length === 0 ||
        arrayIdGender.length === undefined ||
        arrayIdGender.length === 0
        ? false : true
}

export {validateEmptyCampsBookUseCase}