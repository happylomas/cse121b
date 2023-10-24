const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://superhero-search.p.rapidapi.com/api/heroes',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}