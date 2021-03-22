$(document).ready(function () {
    
    const numeri = [1,2,3,4,5,6,7,8,9,10];
    const Range = [];

    const myFunction = (Range,a,b) => {
        Range = numeri.filter((numeri, i) => i >= a && i <= b)
        console.log(Range);
    }
    console.log(numeri);
    myFunction(Range, 3,7)

});




























































