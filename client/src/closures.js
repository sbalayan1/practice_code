function human() {
    const name = 'Sina'
    function sayHi() {
        console.log(`hi I am ${name}`)
    }
}

human()
// => Hi I am Sina

function human() {
    const name = 'Sina'
    function sayHi() {
        console.log(`hi I am ${name}`)
    }
    function sayHowYouFeel() {
        console.log(`${name} is feeling good!`)   
    }
    sayHi()
    sayHowYouFeel()
}

human()
//=> Hi I am Sina
//=> Sina is feeling good!

//The two inner functions sayHi() and sayHowYouFeel() share the name variable because they both have access to the outer scope. This is beneficial because you don't have to create the name variable twice. 

function human(name) {
    function sayHi() {
        console.log(`hi I am ${name}`)
    }
    function sayHowYouFeel() {
        console.log(`${name} is feeling good!`)   
    }
    sayHi()
    sayHowYouFeel()
}

human('Sina')
//=> Hi I am Sina
//=> Sina is feeling good!


function human(name) {
    function sayHi() {
        console.log(`hi I am ${name}`)
    }
    function sayHowYouFeel() {
        console.log(`${name} is feeling good!`)   
    }
    sayHi()
    sayHowYouFeel()
}

const sina = human('Sina')
const qoli = human('Qoli')
//=> Hi I am Sina
//=> Sina is feeling good!
//=> Hi I am Qoli
//=> Qoli is feeling good!

//What would we need to do if we didn't want to immediately invoke the inner functions? One solution is by having the inner functions be methods within an object

//factory function: function that creates objects and sends them back to you
function human(name) {
    function sayHi() {
        console.log(`hi I am ${name}`)
    }
    function sayHowYouFeel() {
        console.log(`${name} is feeling good!`)   
    }
    
    return {
        sayHi, sayHowYouFeel
    }
}

sina = human('Sina')
qoli = human('Qoli')
sina.sayHi()
//=> hi I am Sina
qoli.sayHi()
//=> hi I am Qoli

//Now that human() returns an object, the inner functions can be called later. That also means though that the outer function may have already been called, executed, and finished.
//Somehow the inner function holds onto the value of name. Ultimately closures remember the outer functions scope even after creation time.

//Practical Example
//assume we have 3 buttons of different sizes, and we want to add click event handlers to them. 
document.getElementById('size-12').onclick = function (){
    document.body.style.fontSize = '12px'
}

document.getElementById('size-14').onclick = function (){
    document.body.style.fontSize = '14px'
}

document.getElementById('size-16').onclick = function (){
    document.body.style.fontSize = '16px'
}

//the above repetition sucks. To fix, encapsulate the common logic, aka setting the body font size, into a funciton

function clickHandler(size) {
    document.body.style.fontSize = `${size}px`
}

//with this function, you can assign it to each buttons click event and pass the size to the function as an arguments

document.getElementById('size-12').onclick = clickHandler(12)
document.getElementById('size-14').onclick = clickHandler(14)
document.getElementById('size-14').onclick = clickHandler(16)

//


 