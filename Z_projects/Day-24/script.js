let facts = document.querySelector('.facts');
let btnclick = document.querySelector('.btn');

let apiURL = ('https://jsonplaceholder.typicode.com/posts');

function generator() {
  return Math.floor(Math.random() * 10 + 1)
}

const getdata = async () => {
  facts.innerHTML = "getting...data...";
  let response = await fetch(apiURL);
  let data = await response.json();
  facts.innerHTML = data[generator()].body;

}

btnclick.addEventListener('click', getdata);
