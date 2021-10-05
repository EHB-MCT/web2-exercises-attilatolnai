"use strict"

// window.addEventListener('load', (event) => {
//     console.log('page is fully loaded and ready to go');
// });

window.onload = function(){
    console.log("loaded");

    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();
        
        let name = document.getElementById('name').value;
        // console.log(name);
        let email = document.getElementById('email').value;
        // console.log(email);
        let order = document.getElementById('order').value;
        // console.log(order);

        document.getElementById('messages').innerHTML = `<p>The order for the customer ${name} is the following: ${order}. The customer may be notified by email: ${email}</p>`
    });
}
