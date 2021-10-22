const baseURL = 'http://makeup-api.herokuapp.com/api/v1/products.json';
let url; 
const input = document.querySelector('input')
// api search using get and fetch

const brand = document.querySelector('.brand');
brand.addEventListener('click', (e) => fetchData(e));

function fetchData(event) {
    event.preventDefault()
    console.log(input.value)
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${input.value}`,{
        method:'GET'
    }).then(response => {
       return response.json();
    })
    .then( data => {
        displayData(data);
    });
}

function displayData(makeupData) {
    let container = document.querySelector('.displayResults')
    console.log(makeupData)
    makeupData.forEach(makeupItem => {
        console.log(makeupItem)
let image = document.createElement('img') //use h1 or h2 tagses using .create element method (section is for creating elements )
let title = document.createElement('h2')

image.src=makeupItem.image_link  // .innerText  (set our data to the elements we created above(source))
title.innerText = makeupItem.name

image.style.height = '10vh'
title.style.color = '#5D3FD3'
container.appendChild(image)
container.appendChild(title)
    });
}
