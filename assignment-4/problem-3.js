function sortMaker(arr) { 
    if (arr[0] == arr[1]) {
        return "equal";
    }
    else if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid Input";
    } 
    else {
        let jar1 = 0;
        let jar2 = 1;
        while (jar1 < jar2) {
            if (arr[jar1] < arr[jar2]) {
                let tempoJar = arr[jar1];
                arr[jar1] = arr[jar2];
                arr[jar2] = tempoJar;
            }
            jar1++;
        }
        return arr;
    }
}