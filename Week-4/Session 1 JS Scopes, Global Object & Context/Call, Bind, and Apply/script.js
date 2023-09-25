
class Calculator{

    add( num1 , num2 ){
        return( num1 + num2 );
    }

    subtract( num1 , num2 ){
        return( num1 - num2 );
    }

    multiply( num1 , num2 ){
        return( num1 * num2 );
    }

    divide( num1 , num2 ){
        return( num1 / num2);
    }
}

class ScientificCalculator extends Calculator{

    square( num1 ){
        return( num1 * num1 );
    }

    cube( num1 ){
        return( num1 * num1 * num1 );
    }

    power( num1 , num2 ){
        return(Math.pow( num1 , num2 ));
    }
}






let callAdd = function( num1 , num2 ){

    console.log(this.add( num1 , num2 ));

}

let callSubtract = function( num1 , num2 ){

    console.log(this.subtract( num1 , num2 ));

}

let bindMultiply = function( num1  ){

    console.log(this.multiply( num1 , 2 ));

}

let bindCube = function( num1 ){

    console.log(this.cube( num1 ));

}


let calci = new ScientificCalculator();


callAdd.call(calci, 10 , 5,);
callSubtract.apply(calci,[10 , 5]);


let multiplyByTwo = bindMultiply.bind( calci, 10 );
multiplyByTwo();


let powerOfThree = bindCube.bind( calci, 10 );
powerOfThree();