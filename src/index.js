module.exports = function multiply(first, second) {

    var firstNumber = first.split('').reverse();
    var secondNumber = second.split('').reverse();
    var product = [];

    for(var i = 0; firstNumber[i] >= 0; i++){
        for(var j = 0; secondNumber[j] >= 0; j++){
            if(!product[i + j]){
                product[i + j] = 0;
            }
            product[i + j] = product[i + j] + firstNumber[i] * secondNumber[j];
        }
    }

    for(var i = 0; product[i] >= 0; i++){
        if(product[i] >= 10){
            if(!product[i + 1]){
                product[i + 1] = 0;
            }
            product[i + 1] = product[i + 1] + parseInt(product[i] / 10);
            product[i] = product[i] % 10;
        }
    }
    return product.reverse().join('');
};
