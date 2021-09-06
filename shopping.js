const addToCart = () => {
    const productName = document.getElementById('product-name');
    const productNameValue = productName.value;
    if(!productNameValue){
        return;
    }
    // display in UI
    displayProducts(productNameValue)
    // add to localStorage
    addProductToCart(productNameValue)
    // clear input field
    productName.value = ''

};


const displayProducts = (name) => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li)
};


const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObject;
    if (cart) {
        cartObject = JSON.parse(cart)
    }
    else {
        cartObject = {}
    }
    return cartObject;
};


const addProductToCart = (name) => {
    const cart = getCart();
    if(cart[name]){
        cart[name] = cart[name]+1;
    }
    else{
        cart[name]=1
    }
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied);
}

const loadDataFromLocalStorage=()=>{
    const cart = getCart();
    for (const product in cart){
        displayProducts(product)
    }
};
loadDataFromLocalStorage();

const placeOrder=()=>{
    document.getElementById('products').textContent=''
    localStorage.removeItem('cart')
}