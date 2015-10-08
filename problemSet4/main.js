// var addNumbers = function(str){
// 	var num = 8;
// 	var n = str.search(num);
// 	return n;

// }

// console.log(addNumbers('88Hello3World'))
// //should return 91

// // var longestWord = function(str){

// // }



// var firstReverse = function(str){
// 	return str.split('').reverse().join('')
// }
// console.log(firstReverse("the sun is yellow"))

// //-=-=-=-=-=-==-=-=-=-=-==-=-=-=-=-===-=-=-=-===-=-=///

// var swapCase = function(str){
// 	// pass in string variable
// 	// create a new string
// 	var newStr = "";
// 	for(var i = 0; i < str.length; i++){
// 	// if letter is lower case, change to uppercase
// 		if(str[i] === str[i].toLowerCase()){
// 			newStr += str[i].toUpperCase();
// 	// if letter is upper case, change to lower case
// 		} else {
// 			newStr += str[i].toLowerCase();
// 		}
// 	}
// 	console.log(str);
// 	return newStr;
// 	// goal: swap the case of all letters in the string.
// }
// console.log(swapCase('Hello World'))

// //option 2

// var swapCase = function(str){
// 	// pass in string variable
// 	// create a new string
// 	var newStr = str.split("");
// 	//split str into an array 
// 	console.log(newStr);
// 	for(var i = 0; i < newStr.length; i++){
// 		//loop through the array.
// 	// if letter at index[i] is lower case, change to uppercase
// 		if(newStr[i] === newStr[i].toLowerCase()){
// 			newStr[i] = newStr[i].toUpperCase();
// 	// if letter at index[i] is upper case, change to lower case
// 		} else {
// 			newStr[i] = newStr[i].toLowerCase();
// 		}
// 		// console.log(newStr)
// 	}
// 	//join the array in the newStr to make a string
// 	str = newStr.join("");
// 	// print the string
// 	console.log(str);
// 	// goal: swap the case of all letters in the string.
// }
// console.log(swapCase('Hello World'))

//-=-=-=-=-=-==-=-=-=-=-==-=-=-=-=-===-=-=-=-===-=-=///

var letterCount = function(str){
	// pass in string variable
	// console.log(str);
	// create a new array that takes in each word.
	var words = str.split(" ");
	// console.log(words);
	// loop over each word for letters that match.
	var arr = []
	for(var i = 0; i < words.length; i++){
		//keep track of repeated letters in each word.
		var obj = {}
		for(var j = 0; j < words[i].length; j++){
			if(!obj[words[i][j]]){
				obj[words[i][j]] = 1
			} else {
				obj[words[i][j]] += 1
			}
			console.log(i)
		}
		console.log('Word Obj : ', obj)
		console.log('=============')
		arr.push(obj)
	}
	
	var objIndex = 0;
	var lettersRepeated = 0;
	for(var i = 0; i < arr.length; i++){
		//keep track of number of letters being repeated.
		var total = 0;
		for(var z in arr[i]){   //z is the value of each letter of the specific word.
			if(arr[i][z] > 1){
				total += 1;
			}
			console.log('keys in obj: ', z , 'value',i)

		}
		objIndex = (total > lettersRepeated) ? i: objIndex  //i here is the index that the current object is at. 
		lettersRepeated = (total > lettersRepeated) ? total: lettersRepeated
		// ternary operator > (conditional ? truthy statement: falsey)
	}

	return words[objIndex]

	// GOAL: takes a single string parameter and returns the first word with the greatest number of repeated letters.
}

console.log(letterCount("Toddaayyrrr, is the ggggggggggreatest day ever!"))


//-=-=-=-=-=-==-=-=-=-=-==-=-=-=-=-===-=-=-=-===-=-=///

// var getName = function(obj){
// 	//takes a single object argument
// 	// return the object key to return the value
// 	return obj.gorblepuff;
// }
// console.log(getName({ gorblepuff: 'Luisa', age: 25 }))

//-=-=-=-=-=-==-=-=-=-=-==-=-=-=-=-===-=-=-=-===-=-=///

// var totalLetters = function(arr){
// 	//takes an array of strings
// 	//join the strings in the array
// 	var arrg = arr.join('')
// 	console.log(arrg)
// 	//find the length of the string
// 	//returns total number of letters in all strings
// 	return arrg.length
// }
// console.log(totalLetters(['javascript', 'is', 'awesome']))
// console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']))

// //-=-=-=-=-=-==-=-=-=-=-==-=-=-=-=-===-=-=-=-===-=-=///

// var keyValue = function(a,b){
// 	//takes in two arguments
// 	// var obj = {a:b}
// 	var obj = {
// 		[a] : b,
// 	}
// 	// Goal: returns a new objects
// 	return obj;
// }
// console.log(keyValue('city', 'Denver'));

// //-=-=-=-=-=-==-=-=-=-=-==-=-=-=-=-===-=-=-=-===-=-=///






















