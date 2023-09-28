

const request = require('request');

const arg = process.argv.slice(2);

const breed = arg[0].toString();


const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, responce, body) => {
  if (error) {
    console.log(' error accessing page', error);
    process.exit();
  } else {
    const data = JSON.parse(body);
    if (Array.isArray(data) && data.length === 0) {
      console.log(`No results found for breed: ${breed}`);
    } else {
      console.log(data);
    }
  
  }
});
