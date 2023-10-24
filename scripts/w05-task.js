/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples")

let templeList = []




// out put temple as an array argument 
// function displayTemples(templeList){
//      const templeDiv = document.querySelector("#temples")
//      templeDiv.innerHTML = templeList

//      templeList.forEach(temple => {
//         const templeName = document.createElement("h3")
//         templeName.innerHTML = temple.templeName
//         templeDiv.append(templeName)
//      }); 
// }



/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
    let article = document.createElement("article")
    let h3 = document.createElement("h3")
    h3.textContent = temple.templeName
    let img = document.createElement("img")
    img.src = temple.imageUrl
    img.alt = temple.location
    article.appendChild(h3)
    article.appendChild(img)
    templesElement.appendChild(article);
    }) 
}



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json()
    console.log(templeList)
    displayTemples(templeList)
    
}


/* reset Function */
function reset() {
    document.querySelector("#templesElement").textContent = "article";
}


/* sortBy Function */
function sortBy(temples){
    reset()
    const filter = document.querySelector("#sortBy").innerHTML

    const sortedtemples =templeListList.sort(compare)
    outPutTemples(sortedTemples)
}

function compare(temple1, temple2) {
    if(temple1.templeName < temple2.templeName){
        return 1
    }
    if(temple1 > temple2){
        return -1
    }
    else{
        return 0
    }
}




/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });



getTemples();

