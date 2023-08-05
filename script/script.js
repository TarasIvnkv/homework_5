arr = [];
minLength  = 2;
maxLength = 10;
minRandomNum = -10;
maxRandomNum = 10;


do{
    arrLength = prompt(`Enter array length(min - ${minLength}, max - ${maxLength}):`);
}
while(
    !arrLength
    || parseInt(arrLength) < minLength
    || parseInt(arrLength) > maxLength)

if(arrLength){
    arrLength = Math.round(Math.abs(arrLength));

    minRandomNum = Math.ceil(minRandomNum);
    maxRandomNum = Math.floor(maxRandomNum);

    for(i = 0; i < arrLength; i++){
        arr[i] = Math.floor(Math.random() * (maxRandomNum - minRandomNum + 1) + minRandomNum);
    }
    console.log(`Array : ${arr}`);
    
    minNum = arr[0];
    maxNum = arr[0];

    for(i = 0; i < arrLength; i++){
        currentlyI = arr[i];

        if(currentlyI < minNum){
            minNum = currentlyI;
        }
        if(currentlyI > maxNum){
            maxNum = currentlyI;
        }
    }
    console.log(`Min num : ${minNum}`);
    console.log(`Max num : ${maxNum}`);

    multiplication = 1;

    for(i = 0; i < arrLength; i++){
        multiplication *= arr[i];
    }
    console.log(`Product of all elements : ${multiplication}`);
}