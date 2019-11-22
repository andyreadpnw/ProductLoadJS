document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    openProduct();
});


function openProduct(){
    //local storage method
    // let name = localStorage.getItem('name')
    // let imgTag = localStorage.getItem('imgTag')
    // let product_details = localStorage.getItem('product_details')
    // let id = localStorage.getItem('id')

    let id = document.location.search.replace(/^.*?\=/,'')
    getProduct(id)
}

function getProduct(id){
    const PRODUCT_URL = `http://localhost:3000/products/${id}`
 
    fetch(PRODUCT_URL)
    .then(res => res.json())
    .then(json => displayProduct(json))

}

function displayProduct(json){
    console.log(json)
    let openedProduct = document.getElementById("openedProduct")
    
    let name = json.name
    let imgTag = json.image
    let product_details = json.product_details
    let id = json.id

    let img = document.createElement('img')
    let productTitle = document.createElement('h3')
    let details = document.createElement('div')

    img.src = imgTag
    productTitle.textContent = name
    details.textContent = product_details

    openedProduct.append(img, productTitle, product_details)
}