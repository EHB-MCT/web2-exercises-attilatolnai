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
        let order = document.getElementById('order').value;


        let orderdetails = {
            name: this.name,
            email: this.email,
            order: this.order
        }

        function printOrder(){
            console.log('printOrder');
            document.getElementById('messages').innerHTML = `<p>The order for the customer ${name} is the following: ${order}. The customer may be notified by email: ${email}</p>`
        }

        let dishes = [];
        dishes.push({
            id: '1',
            name: 'Burger and french fries',
            price: '18'
        });
        console.log(dishes);

        printOrder(orderdetails);

    });
}
