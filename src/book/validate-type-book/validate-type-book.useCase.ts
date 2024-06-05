function validateTypeBook(campsNumber: number[], titulo: string, id_autor: number[], id_genero: number[]){
    return campsNumber.find(
        item => typeof item !== 'number') || 
        typeof titulo !== 'string' ||
        typeof (id_autor || id_genero) !== 'object' 
        ? false : true
}

export {validateTypeBook}