// Write a program for a function returning another function


function javaScriptLearning (){
    return function(){
        console.log(`Welcome to Javascript World`);
    }

}

const java = javaScriptLearning();
java();