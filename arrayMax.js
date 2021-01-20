// var marks = [45, 34, 53, 55, 67, 23, 5, 99];

// var max = marks[0];

// for (var i = 0; i < marks.length; i++) {
//     var element = marks[i];
//     if (element > max) {
//         max = element;
//     }
// }
// console.log("Haigest value is =", max);


var marks = [45, 34, 53, 55, 67, 23, 5, 99];


function maxValue(marks) {
    var max = marks[0];
    for (var i = 0; i < marks.length; i++) {
        var element = marks[i];
        if (element > max) {
            max = element;
        }
    }
    return max;

}
var reasult = maxValue(marks);
console.log("Haigest value is =", reasult);