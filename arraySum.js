// var numbers = [12, 3, 2, 45, 6, 7, 2];
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//     var element = numbers[i];
//     sum = sum + element;
// }

// console.log("total Number =", sum);


var numbers = [12, 3, 2, 45, 6, 7, 2];

function arraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var result = arraySum(numbers);
console.log("Sumation of Numbers =", result);

var total = arraySum([1, 3, 4, 5, 6]);
console.log("Total =", total);