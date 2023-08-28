function cubeNumber(number) {
    if(number >= 0){
        const cubeNum = number * number * number;
        return cubeNum;
    }else{
        return "Invalid Input"
    }
}