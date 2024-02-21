// Write a program for backward looping

const arr = [5,10,15,20,25];

for(i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
}

// Loops in Loops

for(i=1;i<=5;i++){
    console.log(`let's start exercise ${i}`);
    for(a=1;a<=5;a++){
        console.log(`this is the repeition ${a} of exercise ${i}`);
    }
}