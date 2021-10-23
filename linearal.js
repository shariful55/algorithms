// function search(arr,n,x){
//     let i=0;
//     for (i=0;i<n;i++)
//     if(arr[i]==x)
//     return 1;
//     return-1;

// }

// //Driver Code 

// let arr=[10,20,30,40,50,60,70,];
// let x=30;
// let n=arr.length;

// let result=search(arr,n,x);

// (result==1)? console.log("element is present is here at index"+result)
// :console.log("element is present is here at index"+result);


// This is the second example of linear search algorithms 


// function Search(arr, search_element){
//     let left=0;
//     let length=arr.length;
//     let right=length-1;

//     let position=-1;
//     for(left=0;left<length;){
//         if(arr[left]==search_element){
//             console.log("element is found at in index "+(position+1)+"with "+(left+1)+"attempt");
//             break;
//         }
//         if(arr[right]==search_element){
//             console.log("element is found at in index "+(position+1)+"with "+(length-right)+"attempt");
//             break;
//         }
//     }
//     left++;
//     right--;
//     if(position==-1)
//     console.log("elenment is not found in the array here ");

// }
// initialise array and variable 
// let arr=[10,20,30,40,50,60,80,90,70,50,];
// let search_element=70;
// //call the function
// Search(arr,search_element);

// This is example of binary search here 

// function binarySearch(arr, l, r,x){

//     if(r>=l){
//         let mid=l+Math.floor((r-1)/2);

//         // If x element equals mid 
//         if(arr[mid]==x)
//         return mid;

//         // if x element is less than mid 
//         if(arr[mid]>x)
//         return binarySearch(arr,l,mid-1,x);

//         return binarySearch(arr, mid+1, r,x);
//     }
//     return -1;

// }

// // Initializing array and variable 
// let arr=[10,20,30,5,6,9,8,32,14,15,19,62,81,];
// let x=19;
// let n=arr.length;

// // call the code 
// let result=binarySearch(arr,0,n-1,x);
// ( result==-1)? document.write("x element is not present in the array here "):document.write("x element is present  in the array  " +result);



// function BinarySearch(arr, x){

//     let l=0;
//     let r=arr.length-1;
//     let mid;
//     while(r>=l){
//         mid=l+Math.floor((r-1)/2);

//         if(arr[mid]==x)
//         return mid;

//         if(arr[mid]>x)
//         return r=mid-1;
        
//         else
//             return l=mid+1;
        

//     }

//     return -1;
// }

// arr=new Array(10,20,50,8,07,4,9);
// x=4;
// n=arr.length;

// result=BinarySearch(arr,x);
// (result==-1)? document.write("Element is not present in the array ") : document.write("Element is present at index: "+result);


// // Another example of Binary search here 

// function binarySearch(arr, x)
// {
// 	let l = 0;
// 	let r = arr.length - 1;
// 	let mid;
// 	while (r >= l) {
// 		mid = l + Math.floor((r - l) / 2);

// 		// If the element is present at the middle
// 		// itself
// 		if (arr[mid] == x)
// 			return mid;

// 		// If element is smaller than mid, then
// 		// it can only be present in left subarray
// 		if (arr[mid] > x)
// 			r = mid - 1;
			
// 		// Else the element can only be present
// 		// in right subarray
// 		else
// 			l = mid + 1;
// 	}

// 	// We reach here when element is not
// 	// present in array
// 	return -1;
// }

// 	arr =new Array(2, 3, 4, 10, 40);
// 	x = 4;
// 	n = arr.length;
// 	result = binarySearch(arr, x);
	
// (result == -1) ? document.write("Element is not present in array")
// 			: document.write ("Element is present at index " + result);
	




// Jump search example



function jumpSearch(arr, n, x){
    // declare step
    let step=Math.sqrt(n);

    // initialise previous value here okay .
    let prev=0;

    while(arr[Math.min(step,n)-1]<x){

        prev=step;
        step+=Math.sqrt(n);

        if(prev>=n)
        return -1;

    }


    while (arr[prev]<x){

        prev++;

        if(prev==Math.min(step,n))
        return -1;


    }

    if(arr[prev]==x)
    return prev;

    return -1;

}

// Driver program to test function 

let arr=[0,1,5,24,25,95,100,112,50];
let x=95;
let n=arr.length;

let index=jumpSearch(arr,n,x);
// Print the index where 'x is located 
document.write(`Number ${x} is at index ${index}`);



