let id = 1;

function generateTransactionId(){

    let transId = Symbol("TRANSACTION_ID_"+id);
    ++id;

    return transId;


}



const transaction1 = generateTransactionId(); console.log(transaction1); // Symbol(TRANSACTION_ID_1)

const transaction2 = generateTransactionId(); console.log(transaction2); // Symbol(TRANSACTION_ID_2)

const transaction3 = generateTransactionId(); console.log(transaction3); // Symbol(TRANSACTION_ID_3) 