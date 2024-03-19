// Write a function for closures

function closure (){
    let counter = 0;
    return function(){
        counter ++;
        console.log(`${counter}`);
    }
}

const closureExample = closure();
closureExample();
closureExample();
closureExample();