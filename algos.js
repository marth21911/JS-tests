// // SELECTION SORT ALGO
// function selectionSort(arr){
//     for(var i = 0; i < arr.length; i++){
//         console.log(arr);
//         console.log(`checking to find the ${i+1}th smallest value`);
//         var mindex = i;
//         for(var j = i; j < arr.length; j++){
//             if(arr[j] < arr[mindex]){
//                 mindex = j;
//             }
//         }
//         var temp = arr[i];
//         arr[i] = arr[mindex];
//         arr[mindex] = temp;
//     }

//     return arr;
// }

// console.log(selectionSort([5,4,2,6,8,14,1,3]));
// // BUBBLE SORT ALGO
// function bubbleSort(arr){
//     var swapped = true;
//     while(swapped){
//         swapped = false;
//         for(var i = 0; i < arr.length - 1; i++){
//             if (arr[i] > arr[i+1]){
//                 swapped = true;
//                 var temp = arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1] = temp;
//             }
//         }
//     }
//     return arr;
// }


// let arr = [5,4,2,6,8,14,1,3,20,-5,24];
// console.log(arr);
// console.log(bubbleSort(arr));
arr=[1,2,3,5,4,8]

const insertionSort = (arr) =>{
    for (i=[1], i<arr.length, i++){
    while( j=i, j--){
    var sorted= false;
    if (arr[j] < arr[j-1])
    var temp= arr[j]
    arr[j]=arr[j-1]
    arr[j-1]= temp
    else return true
        }
    }
}
insertionSort 
    
    //for loop to go forward through array startin at [1]
    //for loop going backward from i position until return is true
    //on each iteration of reverse loop compare j to value to left
    //if j is larger, swap value
    //else return true
    //iternate next value of i
    //this should be it. 

