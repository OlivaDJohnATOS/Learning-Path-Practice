"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
    //return;
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
let combineValues;
combineValues = add;
//combineValues = printResult;
//combineValues = 5;
printResult(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
