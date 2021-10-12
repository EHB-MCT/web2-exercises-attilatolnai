"use strict"

window.onload = function(){
    //generate first number
    generateNumber();
    document.getElementById("guessBtn").
        addEventListener('click', function(event){

        compareNumber(document.getElementById('input').value).then(
            result => {document.getElementById('messages').innerText=result;},
            error => {document.getElementById('messages').innerText=error;}
        );

    });
}

function compareNumber(nr){
    return new Promise(function (resolve,reject) {
        //compare nr with magicNumber

        //if we guessed it right
        resolve('You have guessed it right!')
        reject('')
        
    });
}

function generateNumber(){
    magicNumber = Math.floor(Math.random()*21);
    return magicNumber;
}