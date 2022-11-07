function imageArray() {
    let returnArray = [];
    let returnArrayFinal = [];

    for (let i = 0; i <= 100; i++) {
        // console.log(i);
        returnArray.push(i);
    }
    for (let a = 1; a < returnArray.length; a++) {
        if (returnArray[a] < 10) {
            returnArrayFinal.push("image_" + "00" + a + ".jpg");
        } else if (returnArray[a] < 100 && returnArray[a] >= 10) {
            returnArrayFinal.push("image_" + "0" + a + ".jpg");
        } else {
            returnArrayFinal.push("image_" + a + ".jpg");
        }
    }
    console.log(returnArrayFinal);
}

imageArray();