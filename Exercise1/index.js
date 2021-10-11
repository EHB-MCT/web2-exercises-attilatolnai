"use strict"

const dishes = [{
    id: 1,
    name: 'Cheeseburger',
    price: 3
},{
    id: 2,
    name: '9 Chicken nuggets',
    price: 5
},{
    id: 3,
    name: 'Large fries',
    price: 4
}]

window.onload = function(){
    console.log("loaded");

    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();
        
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let order = document.querySelector('input[name="dish"]:checked').value;

        let dish = dishes.find( d => d.id == order);

        let orderdetails = {
            name, email, dish
        }

        document.getElementById('messages').innerHTML = printOrder(orderdetails);

        function printOrder(orderdetails){
            console.log('printOrder');
            return `<p>The order for the customer ${orderdetails.name} is the following: 
            ${orderdetails.dish.name}. The customer may be notified by email: ${orderdetails.email}</p>`
        }
    });
}
