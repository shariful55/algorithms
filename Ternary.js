
//Ternary algorithms time complexity log3n 

function TernarySearch(arr,l,r,x){
    var mid1=l+parseInt((r-l)/3);
    var mid2=mid1+parseInt((r-l)/3);

    if(r>=l){

    if(arr[mid1]==x)
    return mid1;

    if(arr[mid2]==x)
    return mid2;

    if(arr[mid1]>=x)
    return TernarySearch(arr,l,mid1-1,x);

    if(arr[mid2]<=x)
    return TernarySearch(arr,mid2+1,r,x)


    return TernarySearch(arr, mid1+1, mid2-1,x)

    }
    return -1;


}

var arr=[1,5,3,6,4,8,9,7];
var x=7;
var r=arr.length;

var num= TernarySearch(arr,0,r,x);

if(num==-1){
    document.write("Number is not found in the array ");

}else{
    document.write("number is found at index : "+num);
}

