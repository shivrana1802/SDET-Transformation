// Write a program for continue and break statements using for loop

const arr = [5,10,15,20,25];

for(i=0;i<arr.length;i++){
    if(arr[i] % 2 == 0) break;
    else {
        console.log(`${arr[i]}`)
    }
}

for(i=0;i<arr.length;i++){
    if(arr[i] % 2 == 0) continue;
    else {
        console.log(`${arr[i]}`)
    }
}