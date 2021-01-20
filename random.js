// var n = 2.656576;
// var resultFloor = Math.floor(n);
// var resultCeil = Math.ceil(n);
// var resultRound = Math.round(n);

var output = [];

function randomNum(n) {
    for (var i = 0; i < n; i++) {
        var dice = Math.random() * 6+1;
        output[i] = Math.round(dice);
        
    }
    return output;

}

var reasult = randomNum(10);
console.log(reasult);


// for (var i = 0; i < 10; i++) {
//     var dice = Math.random() * 10;
//     var output = Math.round(dice);
//     console.log(output);

// }
