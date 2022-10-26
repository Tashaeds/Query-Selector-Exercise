//////////////// Query Selector Exercise //////////////////
/*
1. Given the boiler plate use query selector console log the following items on the page:​

    - The text Content of the H1 element​
    - The text content of the id “Hero”​
    -The text content of the first instance of the class “list”​

2. Add some text to the p tag with the id “dynamic-text”​
​*/

// Add Your JavaScript Below

let head1 = document.querySelector("h1").textContent;
console.log (head1)

let hero = document.querySelector("#hero").textContent;
console.log (hero)

let myList = document.querySelector (".list").textContent;
console.log (myList)

let dynamicText = document.querySelector("#dynamic-text").textContent = "Fill me in";
console.log (dynamicText)













