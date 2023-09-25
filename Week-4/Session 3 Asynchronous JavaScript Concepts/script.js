
async function getExchangeRate(currencyCode) { // Your code here
		
    try{
        const response = await fetch("https://api.exchangerate.host/latest");
        const data = await response.json();
        return(data.rates[currencyCode]);
        
    }
    catch(error ){

        console.log(error);

    }
    
}

getExchangeRate('USD')
.then((rate) => {
console.log(rate); // Output: 1.2133 
})

.catch((error) => {

console.error(error);

});
