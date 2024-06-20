function validateTypeBook(campsNumber: number[], titulo: string, arrayIdAuthor: number[], arrayIdGender: number[]){
    return campsNumber.find(
        item => typeof item !== 'number') || 
        typeof titulo !== 'string' ||
        typeof (arrayIdAuthor || arrayIdGender) !== 'object' ||
        arrayIdAuthor.find(item => typeof item !== 'number') ||
        arrayIdGender.find(item => typeof item !== 'number')
        ? false : true
}

export {validateTypeBook}