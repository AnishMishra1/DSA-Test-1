//let arr = [0,1,0,3,12]

function sort(arr){
let n = arr.length

if(n==0 || n==1){
    return arr;
}
let right =0;
let left =0;
let  temp;
while(right<n){
    if(arr[right] == 0){
        right++;
    }
    else{
        temp = arr[left]
        arr[left] = arr[right];
        arr[right] = temp;
        left++
        right++
    }

}
return arr
}


let arr = [0,1,0,3,12]

console.log(sort(arr));
