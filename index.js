const PL_URL = "http://localhost:3000/products"

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    fetchData();
});

function fetchData(){
    fetch(PL_URL)
      .then(res => res.json())
      .then(json => displayJson(json))
  
  }
  
  function displayJson(json){
  
    for(let i = 0; i < json.length; i++){
      let name = json[i].name
      let imgTag = json[i].image
      let product_details = json[i].product_details
      let deptStyle = "dept: " + json[i].dept + " " + "style: " + json[i].style_id
      let id = json[i].id

        let products = document.getElementById("products")
        let newProductCard = document.createElement("div")
        newProductCard.className = "card"
       
        let newProductTitle = document.createElement("h5")
        let newProductDeptStyle = document.createElement("p")
        let newProductImg = document.createElement('img')

        let newProductButton = document.createElement('div')
        newProductButton.className = "item-button"
        newProductButton.id = "open-product"
        newProductButton.innerText = "Open Product"

        newProductTitle.textContent = name
        newProductDeptStyle.textContent = deptStyle
        newProductImg.src = imgTag

        newProductCard.appendChild(newProductImg) 
        newProductCard.appendChild(newProductTitle)
        newProductCard.appendChild(newProductDeptStyle)
        newProductCard.appendChild(newProductButton) 

        products.appendChild(newProductCard)

        //open specific product button
        newProductButton.addEventListener('click', event => {
          event.preventDefault();
          //local storage method to pass to product.js
          // localStorage.setItem('name', name)
          // localStorage.setItem('imgTag', imgTag)
          // localStorage.setItem('product_details', product_details)
          // localStorage.setItem('id', id)

          //query string method to pass to product.js
          window.document.location = './product.html' + '?id=' + id
        });
    
    }
  }


