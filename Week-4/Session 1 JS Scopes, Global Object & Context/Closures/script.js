
function counter(){
    let count = 0;

    function inner(){
        count++;
        return count;
    }

    return inner;
}

let firstCounter = counter();
let secondCounter = counter();

let firstValues = [];
let secondValues = [];

firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());

secondValues.push(secondCounter());
secondValues.push(secondCounter());
secondValues.push(secondCounter());

console.log(firstValues);
console.log(secondValues);