function validateEmptyCampsBookUseCase(campsNumber: number[], titulo: string, arrayIdAuthor: number[], arrayIdGender: number[]){
    return campsNumber.find(item => !item) ||
        !titulo.trim() ||
        arrayIdAuthor.length === undefined ||
        arrayIdAuthor.length === 0 ||
        arrayIdAuthor.find(item => typeof item !== 'number') ||
        arrayIdGender.length === undefined ||
        arrayIdGender.length === 0 ||
        arrayIdGender.find(item => typeof item !== 'number')
        ? false : true
}

export {validateEmptyCampsBookUseCase}