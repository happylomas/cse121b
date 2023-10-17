/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Prince Ebere",
    photo: "images/placeholder.jpeg",
    favoriteFoods: [
        "Rice",
        "Beans",
        "Garri",
        "soup"
    ],
    hobbies: [
        "soccer",
        "computer game",
        "movies"
    ],
    placesLived: [],
};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Aba Nigeria",
        length: "4 years"
    }, {
        place: "Absu Okigwe",
        length: "4 years"
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name
// document.querySelector('#name').textContent = myInfo.name

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo

document.getElementById("name").alt = "";





/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});


/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    document.querySelector("#places-lived").appendChild(dt);
});

myProfile.placesLived.forEach(length => {
    let dd = document.createElement("dd");
    dd.textContent = length.length;
    document.querySelector("#places-lived").appendChild(dd);
});