// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
	for (let i=a.length-1; i>=0; i--){
	  
		   if(  a.indexOf(a[i])  != i ){         
		   a.splice(i,1)
		 }       
	}
	
	return a;
  }


// function distinct(arr) {  
	
// 	for (let i=arr.length-1; i>=0; i--){
		
// 	   	   if(  arr.indexOf(arr[i])  != i ){			   
// 			   arr.splice(i,1)
// 		   }		   
// 	}
	
//    return (console.log(arr));
	
//  }
  
  
//   function distinct2(arr) {

//   	let result = []

//   	for (let str of arr) {

//   		if (!result.includes(str)) {
//   			result.push(str)
//   		}
//   	}

//   	return (console.log(result));

//   }
  
  
//   let a=[11, -2, 4, 3, 11, -79, -2, 0]
  
//   distinct(a)
  
//   distinct2(a)