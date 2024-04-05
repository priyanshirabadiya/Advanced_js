// Number programs ->generate random number
// multiply by * for range in which you want to create rendom 

// let x = Math.random() * 100 ;
// x = Number.parseInt(x);
// console.log(x);


// prime number

// let n = 55;
// let flag = 0; 
// for (i = 2 ; i < n ; i++ ){
//     if(n % i == 0){
//         flag = 1;
//         break;
//     }

// }
// if(flag == 1){
//     console.log("not prime");
// }
// else{
//     console.log("prime");
// }

// 3. program to find largest of three number

// let a = 40;
// let b = 40;
// let c = 40;


// (a > b && a > c) ? console.log('A is greater') :
//     (b > a && b > c) ? console.log('B is greater') :
//         (c > a && c > b) ? console.log('c is greater') :
//             console.log('some numbers are equal');


// let x = Math.max(92,45,56);
// console.log(x);



//4. JavaScript Program to Print All Prime Numbers in an Interval
// let a, b, i, j, flag; 

// a = 2 
// b = 11 
// for (i = a; i <= b; i++) { 
// 	flag = 1; 

// 	for (j = 2; j <= i / 2; ++j) { 
// 		if (i % j == 0) { 
// 			flag = 0; 
// 			break; 
// 		} 
// 	} 

// 	// flag = 1 means i is prime 
// 	// and flag = 0 means i is not prime 
// 	if (flag == 1) 
// 		console.log(i); 
// }


// 5. Aayush code from kk

// A to z
// let a = 'a';

// for(let i = a ; i < 'z' ; i = String.fromCharCode(i.charCodeAt(0)+1))
// {
//     console.log(i);
// }


// print sum of odd

let n = 10;
let to = 0;
for (let i = 0 ; i < n ; i += 2){
     to = to + i;
}
console.log(to);
