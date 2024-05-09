// let arr = [10, 20, 10, 20, 10, 30, 10, 50];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (arr[i] == "10") {
//         pair++;
//         if (pair > 2) {
//             break;
//         }
//     }
// }


// let arr = [10, 20, 10, 20, 10, 30, 10, 50];
// arr.reduce((prevent,current) => {
//     if(arr[prevent] == arr[current])
//     {
//         console.log(arr[prevent]);
//     }
// })

// let arr = [10, 20, 10, 20, 10, 30, 10, 50];
// let pair = 0;
// arr.reduce((accumulator, currentValue, currentIndex) => {
//     if (arr.indexOf(currentValue) !== currentIndex) {
//         console.log(currentValue);
//         pair++;
//     }
//     return currentValue; // Return currentValue to pass it to the next iteration
// });
// console.log(pair);


// let arr = [10, 20, 10, 20, 10, 30, 10, 50];
// let pair = 0;
// arr.reduce((accumulator, currentValue, currentIndex) => {
//     if (arr.indexOf(currentValue) !== currentIndex) {
//         pair++;
//     }
//     return currentValue; // Return currentValue to pass it to the next iteration
// }, null);

// console.log(pair);


let arr = [10, 20, 10, 20, 10, 30, 10, 50];
let halfindex = Math.floor(arr.length/2);
let firstpart = arr.slice(0,halfindex);
let secpart = arr.slice(halfindex);
console.log(firstpart);
console.log(secpart);

let set1 = new Set(firstpart);

let set2 = new Set(secpart.filter(element => element === 10)); // Filtering secPart for elements equal to 10

let pairs = set1.size + set2.size;
console.log(pairs);
