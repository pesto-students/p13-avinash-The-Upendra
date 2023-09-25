
function calcWordFrequencies( str ){

    let strMap = new Map();
    str.split(" ").map(mappingFunction);


    strMap.forEach(function(value, key) {
        console.log(key+" "+value);
      })


    function mappingFunction(value){
        if(!strMap.has(value)){
            strMap.set(value,1);
        }
        else{
            let count = strMap.get(value);
            count++;
            strMap.set(value,count);
        }
    }

}



let str = "hey hi Mark hi mark";

calcWordFrequencies(str);