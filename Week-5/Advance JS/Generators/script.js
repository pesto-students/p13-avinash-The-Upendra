
const arr = ['hello', 'world', 'test'];

function* generatorFunction( array ){

    for( let i = 0 ; i < array.length ; i++ ){

        yield Symbol(array[i]);
    }
}

let generate = generatorFunction( arr );

for( let string of generate ){
    console.log(string);
}

// ####    Alternate Approach    ########

// console.log(generate.next().value);
// console.log(generate.next().value);
// console.log(generate.next().value);