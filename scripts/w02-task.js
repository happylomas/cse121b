/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
let fullName = "Prince Ebere";

/* Step 2 - Variables */

let currentYear = new Date().getFullYear();


let profilePicture = "images/placeholder.jpeg";

let altText = "my photo"


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
// nameElement.innerHTML = "<strong>${fullName}</strong>";

yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', altText);



/* Step 5 - Array */

let foodArray = ["Beans", "Rice", "Garri", "Soup"]


foodElement.textContent = foodArray;

let favfood = ["yam", "plantain"]
foodArray.push(favfood)


foodElement.innerHTML += `<br>${foodArray}`;
foodElement.innerHTML += `<br>${favfood}`;


let removeBeans = foodArray[0].pop();
foodElement.innerHTML += `<br>${removeBeans}`;

let removeSoup = foodArray.pop();
foodElement.innerHTML += `<br>${removeSoup}`;






