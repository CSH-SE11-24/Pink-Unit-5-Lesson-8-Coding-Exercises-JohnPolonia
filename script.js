console.log("Script running")
// Task 1: Hello button flow
// Select the 'Click me for hello' button
let button = document.querySelector("#helloButton")
console.log(button)
// Select the empty p tag under that button
let helloText = document.querySelector("#helloText")
console.log(helloText)
// Add an event listener to the hello button such that when it's click, the p tag text says "Hello"
button.addEventListener("click", function(event) {
  helloText.innerHTML = "Hello"
})
  


// Task 2: All caps button flow
// Implement the DOM manipulation code flow such that when you click the all caps button, the text below becomes all caps (i.e. "THERE'S NO NEED TO SHOUT")
// Make sure to add whatever IDs/classes you need to select the necessary elements
let allCaps = document.querySelector("#allCaps")

allCaps.addEventListener("click", function(event){
 allCaps.innerHTML = "THERE'S NO NEED TO SHOUT"
})






// Task 3: Dog image flow
// Implement the DOM manipulation code flow such that when your mouse is over the dog image, it shows happy-dog.jpeg and when it is off the dog image, it shows sad-dog.jpeg.
// Make sure to add whatever IDs/classes you need to select the necessary elements
let dogImage = document.querySelector("#dogImage")
console.log(dogImage)
dogImage.addEventListener("mouseover", function(event){
  dogImage.src = "happy-dog.jpeg"
  
  
})








// Task 4: Name input flow
// Implement the DOM manipulation code flow such that when you click the submit button, you display "Nice to meet you " with the value typed into the input field
// Make sure to add whatever IDs/classes you need to select the necessary elements
let nameInput = document.querySelector("#nameInput")

let nameOutput = document.querySelector("#nameOutput")
console.log(nameInput)
console.log(nameOutput)
nameInput.addEventListener("click", function(event){
  nameOutput.innerHTML = "Nice to meet you" + nameInput.value
})








