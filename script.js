//alert("Hello, World!")

console.log("Howdy, World!")

let firstName = "Mandy"
let lastName = "Campbell"
let age = 25
let likesToTravel = true

console.log(firstName, lastName, age, likesToTravel)

// In your JavaScript file, instantiate and assign the following variables with information about the current weather:
// temperature should hold a number representing the current temperature in Fahrenheit

let temp = 42

// conditions should hold a string about the current weather conditions (i.e. "cloudy", "sunny", etc).

let conditions = "overcast, cold, and rainy"
// sunriseTime should hold a string representing what time the sun rose this morning

let sunriseTime = "7:32 AM"

// sunsetTime should hold a string representing what time the sun will set this evening

let sunsetTime = "5:08 PM"

// Log each variable to the console.
console.log(temp, conditions, sunriseTime, sunsetTime)

// Use string template literals to combine these variables into a sentence about the weather. (Example: "It's currently sunny and 55 degrees. The sun rose this morning at 7:34 AM and will set at 5:09 PM.")

console.log(`Today, December 5, 2020. It's currently ${temp} degrees with ${conditions} weather.  The sun rose at ${sunriseTime} and set at ${sunsetTime}`)