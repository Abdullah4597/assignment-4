function canPay(changeArray, totalDue) {
    if (changeArray.length == 0) {
        return "You have no money"
    } else {
        let money = 0;
        for (let i = 0; i < changeArray.length; i++) {
            let index = changeArray[i];
            money += index;
        }
        return money >= totalDue;
    }


}