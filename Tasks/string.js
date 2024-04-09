// let str = "hello world this is";

// function check(str){
//     return /\s/.test(str);
// }

// if(check(str)){
//     console.log('Containe white space');
// }
// else{
//     console.log('not containe');
// }
// console.log(str.trim().split(/\s+/));


// let str = "hello world this is";
// let rev = str.split('').reverse().join('');
// console.log(rev); 

// let str = "hello world this is hello";
// let x = 
// console.log(str.slice(1));
// console.log(str.charAt(str.length - 1));
// console.log(str.startsWith('tello'));
// console.log(str.replace(/hello/gi,'welcome'));

// Input object 
// let obj_to_str = {  
//     name: "GeeksForGeeks",  
//     city: "Noida",  
//     contact: 2488  
// };

//  obj_to_str = String(obj_to_str)

//  console.log(typeof(obj_to_str));


// let str = "greek for greeks is best"
// let flag = str.includes('greek');
// console.log(flag);



// let str = "greek greeks is best"
// let str2 = "greek greeks is best";

// let ans = str.localeCompare(str2);

// if(ans == -1)
// {
//     console.log('Strings are not same');
// }
// else if(ans == 0){
//     console.log('Strings are sane');
// }
// else{
//     console.log('Strings are not same');
// }


// encode decode string

// let str = "rfrrty"
// console.log(str.replace('hello','hi'));
// let rev = str.split('').reverse().join('');

// if(str == rev){
//     console.log('strings are palindrom');
// }
// else{
//     console.log('strings are not palindrome');
// }


	// function that count character occurrences in string 
	function count_occur( str )
	{
	// checking string is valid or not 
	if( str.length == 0 )
	{
		console.log("Invalid string")
		return;
	}
	//cor loop to iterate over string
	for( let i = 0 ;i < str.length ;i++)
	{ 
		//variable counting occurrence 
		let count = 0;
		for(let j = 0 ;j < str.length ;j++)
		{
		if( str[i] == str[j] && i > j )
		{
			break;
		}
		if( str[i] == str[j] )
		{
			count++;
		}
		}
		if( count > 0)
		console.log(`${str[i]} occurs ${count} times`);
		
	}
	}
	
	// test string
	let test_str = "gfghello";
	count_occur( test_str);














