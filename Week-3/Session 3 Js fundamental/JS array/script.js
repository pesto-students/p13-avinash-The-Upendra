function divideArray(numArr){

    let evenArr = [];
    let oddArr = [];

    for(let i = 0; i< numArr.length ; i++){

        if(numArr[i] % 2 == 0){
            
            evenArr.push(numArr[i]);
        }
        else{
            oddArr.push(numArr[i]);
        }
    }


    printArr(evenArr.sort(), "Even");
    printArr(oddArr.sort()), "Odd";

}

function printArr(Arr, type){
    
    if(Arr.length > 1){
        console.log( type + " numbers: ");
        for (let index = 0; index < Arr.length; index++) {
            console.log(Arr[index]);
        }
    }
    else{
        console.log( type + " numbers: None");
        
    }
}


let nums = [4, 2, 9, 1, 8]; 

divideArray(nums);