function drawTriangle( num ){

    for (let index = 0; index < num; index++) {
        
        let str = "";
        
        for (let row = 0; row <= index; row++) {
            
            
            str = str+"*";
    
        }

        console.log(str);
        
        
    }
}
drawTriangle(4);