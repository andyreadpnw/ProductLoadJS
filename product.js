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
    // openedProduct.style.width = 50%
    
    let name = json.name
    let imgTag = json.image
    let product_details = json.product_details
    let dept = json.dept
    let style = json.style_id
    let id = json.id
    let features = json.features

    let img = document.createElement('img')
    let productTitle = document.createElement('h3')
    let deptDisplay = document.createElement('div')
    let styleDisplay = document.createElement('div')
    let details = document.createElement('div')
    let featuresDiv = document.createElement('div')

    img.src = imgTag
    img.style.height = '300px';
    img.style.width = '300px';

    productTitle.textContent = name
    details.textContent = "Product Details: " + product_details
    deptDisplay.textContent = "Dept: " + dept
    styleDisplay.textContent = "Style: " + style

    let displayFeature = []
    for(let i = 0; i < features.length; i++){
        let featureId = features[i].type
        displayFeature.push(" " + featureId)
    }

    featuresDiv.textContent = "Features: " + displayFeature

    openedProduct.append(img, productTitle, deptDisplay, styleDisplay, product_details, featuresDiv)
}