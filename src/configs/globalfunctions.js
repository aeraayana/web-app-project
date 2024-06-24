const generateErrorMessage = (array) => {
    if( array ){
        for( let i=0; i<array.length; i++ ){
            array[i] = array[i].slice(0, 1).toUpperCase() + array[i].slice(1);
        }
        return array.join(", ");
    }
    return null;
}

export { generateErrorMessage };