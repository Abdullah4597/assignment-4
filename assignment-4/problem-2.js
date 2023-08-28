function matchFinder(string1, string2) {
    if(string1.includes(string2)){
        return true;
    }else if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return "Invalide Input";
    }else{
        return false;
    }
}