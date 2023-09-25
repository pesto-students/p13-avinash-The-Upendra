
let productViews = new WeakMap();

let cartItems = new WeakSet();

  
function incrementProductViews(productId){

    if( productViews.has(productId) ){
        console.log("if");
        let count = productViews.get(productId);
        ++count;
        productViews.set( productId, count );
        console.log(productViews.get(productId));
    }
    else{
        console.log("else");
        let productId = {};
        productViews.set( productId, 1 );
        console.log(productViews.get(productId));
    }
}


function addToCart(productId){

    if(cartItems.has(productId)){

        return("Product already in cart");

    }
    else{
        let x = {productId};
        cartItems.add({productId})
        return("Product added to cart");
    }
    
}