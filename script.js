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

//12/8/2020

let movieArray = ['Moana', 'The Magnificent Seven', 'Mulan']
console.log(movieArray) //should show 3 movies
console.log(movieArray[0]) //should show Moana
console.log(movieArray[1]) //should be Magnificent Seven
console.log(movieArray[2]) //should be Mulan
console.log(movieArray.length) // shows length

// Instead of storing the data from your first lightning exercise in separate variables, store them in an object. Your object should have a property of firstName, lastName, age, likesToTravel. It should also have a property called favoriteMovies, which should hold the array of your favorite movies you created in the last lightning exercise.

let studentObject = {
    firstName: "Mandy",
    lastName: "Campbell",
    age: 27,
    likesToTravel: true,
    favoriteMovies: ['Charlottes Web', "The Great Gatsby", "Smart People"]
}

console.log(studentObject) //should show all info