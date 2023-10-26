
// Javascript 
let heroElement = document.getElementById("hero")
let getHero = async () => {


const url = 'https://superhero-search.p.rapidapi.com/api/heroes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b96f277319msh5fbc6ce98b9df65p1ada49jsn9facf61a3815',
		'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	// console.log(result);
  displayHeros(result)
} catch (error) {
	console.error(error);
}

};

/* async displayTemples Function */
const displayHeros = (heroes) => {
  heroes.forEach(hero => {
  let article = document.createElement("article")
  let h1 = document.createElement("h1")
  h1.textContent = hero.name
  let h2 = document.createElement("h2")
  h2.textContent = hero.biography.fullName
  let h3 = document.createElement("h3")
  h3.textContent = hero.work.occupation
  let h4 = document.createElement("h4")
  h4.textContent = hero.appearance.gender
  // let h5 = document.createElement("h5")
  // h5.textContent = hero.powerstats.intelligence
  // let h6 = document.createElement("h6")
  // h6.textContent = hero.powerstats.strength
  // let h7 = document.createElement("h7")
  // h7.textContent = hero.powerstats.speed
  // let p = document.createElement("p")
  // p.textContent = hero.powerstats.power
  let img = document.createElement("img")
  img.src = hero.images.xs
  img.alt = hero.location
  article.appendChild(h1)
  article.appendChild(h2)
  article.appendChild(h3)
  article.appendChild(h4)
  // article.appendChild(h5)
  // article.appendChild(h6)
  // article.appendChild(h7)
  // article.appendChild(p)
  article.appendChild(img)
  heroElement.appendChild(article);
  console.log(hero)
  }) 
}




getHero();