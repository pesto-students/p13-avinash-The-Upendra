
function isStrongPassword(password){


    if( ( password.length > 8 ) && ( !password.includes("password")) && (/[A-Z]/.test(password)) ){
        return true;
    }
    else{
        return false;
    }


}

let str1 ="Qwerty123";
let str2 = "Qwerty123password";
let str3 = "Qwerty";
let str4 = "qwertyuiop"; 
isStrongPassword(str1);