// import { productList } from "./data.js";
// const card = document.querySelector('.card');
const productList = [
    {
        id: 1,
        productName: "WIHOLL Summer Dresses Cap Sleeve Crewneck Maxi Long Casual Dress with Pockets Beach Vacation Sundresses 2026 Trendy",
        productPrice: 4162,
        productPriceDismal: 25,
        productDate: "Wed, Jul 29",
        img: "card-img1.png",
        quantity: 1,
    },
    {
        id: 2,
        productName: "Zeagoo Summer Dresses for Women Casual A Line Dress 2026 V Neck Short Dresses Floral Sundress Pleated Boho Dress",
        productPrice: 3745,
        productPriceDismal: 18,
        productDate: "mon, Aug 4",
        img: "card-img2.png",
        quantity: 1,
    },
    {
        id: 3,
        productName: "WIHOLL Summer Dresses Cap Sleeve Crewneck Maxi Long Casual Dress with Pockets Beach Vacation Sundresses 2026 Trendy",
        productPrice: 5553,
        productPriceDismal: 34,
        productDate: "Thu, Jul 30",
        img: "card-img3.png",
        quantity: 1,
    },
    {
        id: 4,
        productName: "WIHOLL Summer Dresses Cap Sleeve Crewneck Maxi Long Casual Dress with Pockets Beach Vacation Sundresses 2026 Trendy",
        productPrice: 7450,
        productPriceDismal: 25,
        productDate: "Wed, Apr 20",
        img: "card-img4.png",
        quantity: 1,
    },
    {
        id: 5,
        productName: "WIHOLL Summer Dresses Cap Sleeve Crewneck Maxi Long Casual Dress with Pockets Beach Vacation Sundresses 2026 Trendy",
        productPrice: 1450,
        productPriceDismal: 5,
        productDate: "Wed, Apr 20",
        img: "card-img5.png",
        quantity: 1,
    },
    {
        id: 6,
        productName: "WIHOLL Summer Dresses Cap Sleeve Crewneck Maxi Long Casual Dress with Pockets Beach Vacation Sundresses 2026 Trendy",
        productPrice: 450,
        productPriceDismal: 99,
        productDate: "Wed, Apr 20",
        img: "card-img6.png",
        quantity: 1,
    },
    {
        id: 7,
        productName: "WIHOLL Summer Dresses Cap Sleeve Crewneck Maxi Long Casual Dress with Pockets Beach Vacation Sundresses 2026 Trendy",
        productPrice: 450,
        productPriceDismal: 99,
        productDate: "Wed, Apr 20",
        img: "card-img6.png",
        quantity: 1,
    }
];

const cartPopUp = document.getElementById('cart_pop_up');
const productCart = document.getElementById('card');
const addCart = document.getElementById('add-cart');
const rightCart = document.querySelector('.card_left_count');
const cardAddRight = document.getElementById('card');
const rightAddcard = document.querySelector('.left_add_cart')
const priceDisplay = document.getElementById('total_price')

let save = localStorage.getItem('cartItems')
// let show = JSON.parse(save)
let products = [];
let cartItems = save ? JSON.parse(save) : [];

if (cartItems.length > 0) {
    rightCart.classList.remove('disply_none');
    cardAddRight.classList.remove('grid_4');
    cardAddRight.classList.add('grid_3');

    cardAddRightRenderFunction();
}

function saveProduct() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}


function renderProduct() {
    productCart.innerHTML = "";
    productList.forEach((product) => {
        productCart.innerHTML += `
                <div class="card_inar_box">
                    <div class="card_img_box">
                        <img src="aside/imags/card_imgs_nobg/${product.img}" alt="">
                    </div>
                    <div class="card_info_box">
                        <div class="prodect-detlat">
                            <h2>${product.productName}</h2>
                        </div>
                        <div class="prodect_ranting">
                            <span>4.4</span>
                            <span class="img_span">
                                <img width="50px" src="aside/imags/stars/5 star.png" alt="">
                            </span>
                            <span><i class="fa-solid fa-caret-down"></i></span>
                            <span>(1.2K)</span>
                        </div>
                        <div class="card_month_dat">
                            <span>2K+ bought in past month</span>
                        </div>
                        <div class="prodect_pric">
                            <div class="card_prodect_pric">
                                <span class="black">PKR</span>
                                <span class="black">${product.productPrice}</span>
                                <span class="black">${product.productPriceDismal}</span>
                            </div>
                            <div class="pric_list">
                                <span>List: </span>
                                <span>PKR 14,227.20</span>
                            </div>
                        </div>
                        <div class="delivery_box">
                            <span>PKR 12,234.84 delivery </span>
                            <span>Wed, Jul 29</span>
                        </div>
                        <div class="ship_pk">
                            <span class="black">Ships to Pakistan</span>
                        </div>
                        <div class="card_button_box" id="${product.id}">
                            <button id="${product.id}">
                                <span>Add to cart</span>
                            </button>
                        </div>
                    </div>
                </div> `
    })
};

renderProduct();
cardAddRightRenderFunction()
function addCartBtnFunction(params, prod) {
    let existingProduct = cartItems.find(item => item.id === prod.id);

    if (existingProduct) {
        existingProduct.quantity++
        saveProduct()
        cardAddRightRenderFunction()
    } else {
        cartItems.push({
            id: prod.id,
            productName: prod.productName,
            productPrice: prod.productPrice,
            productPriceDismal: prod.productPriceDismal,
            productDate: prod.productDate,
            img: prod.img,
            quantity: 1,
        })
        saveProduct()
        cardAddRightRenderFunction()
    }
    if (cartItems.length > 0) {
        rightCart.classList.remove('disply_none');
        cardAddRight.classList.remove('grid_4');
        cardAddRight.classList.add('grid_3');
        saveProduct()
        cardAddRightRenderFunction();
        totalPriceFunction()
    }
}




function coatPopUpRender(product) {

    cartPopUp.innerHTML = `
    <div>
            <div class="cart_hader">
                <i class="fa-solid fa-x close" id="pop_close_one"></i>
            </div>
            <hr class="hr_lin">
            <div class="cart_ifo">
                <div class="cart_prot_datl">
                    <div class="cart_img">
                        <img width="35px" src="aside/imags/card_imgs_nobg/${product.img}" alt="">
                    </div>
                    <div class="cart_prod_mane">
                        <div class="summer_dras">
                            <span>${product.productName}</span>
                            <div class="dras_colar">
                                <span>color :</span>
                                <span>Boho Paisley Print</span>
                                <br>
                                <a href="#">See all item details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="info">
                <div class="empt"></div>
                <div>
                    <div class="size_info">
                        <span>Size:</span>
                        <div class="size_list">
                            <span>simal <i class="fa-solid fa-angle-down"></i></span>
                        </div>
                    </div>
                    <div class="prod_pric">
                        <div class="prise_pkr">
                            <span>PKR</span>
                            <span>${product.productPrice}</span>
                            <span>${product.productPriceDismal}</span>
                        </div>
                        <div class="old_prs">
                            <span>List :</span>
                            <span><span class="text_nune">PKR 6,665.02</span></span>
                        </div>
                    </div>
                    <div class="lin_div"></div>
                    <div class="new_pric">
                        <span>PKR 11,940.92 delivery </span>
                        <span>${product.productDate}</span>
                    </div>
                    <div class="add_cart_box">
                        <span id="cancel-cart">
                            <button>Cancel</button>
                        </span>
                        <span id="add-cart">
                            <button>Add to cart</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `
};

let cartButton = document.querySelectorAll('.card_button_box');

cartButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        let id = Number(button.id)
        const product = productList.find((item) => item.id === id);
        cartPopUp.classList.remove('disply_none');
        coatPopUpRender(product);
        popUpCloseFunction(product);
    })
})



function popUpCloseFunction(prod) {

    const popCloseTop = document.getElementById('pop_close_one');
    const cancelCart = document.getElementById('cancel-cart');
    const addCartBtn = document.getElementById('add-cart');
    addCartBtn.addEventListener('click', (event) => {
        cartPopUp.classList.add('disply_none');
        addCartBtnFunction(event, prod);
    })
    popCloseTop.addEventListener('click', () => {
        cartPopUp.classList.add('disply_none');
    });
    cancelCart.addEventListener('click', () => {
        cartPopUp.classList.add('disply_none');
    })
}


function cardAddRightRenderFunction(params) {
    rightAddcard.innerHTML = "";
    cartItems.forEach((product) => {
        rightAddcard.innerHTML += `
        <li>
            <div class="left_card_img_box flex_box">
                <img src="aside/imags/card_imgs_nobg/${product.img}" alt="">
            </div>
            <div class="Limited_time_div">
                <span>Limited time</span>
                <span>PKR ${product.productPrice}.${product.productPriceDismal}</span>
            </div>
            <div  class="left_card_btn_div">
                <button class="decrement" data-id="${product.id}"><span class="product_decrement">-</span></button>
                <div class="count_div">
                    <span>${product.quantity}</span>
                </div>
                <button class="increment" data-id="${product.id}"><span class="product_increment">+</span></button>
            </div>
        </li>
    `
    })
    productdecres()
    productincremes()

}
function productdecres() {
    let decrement = document.querySelectorAll('.decrement');
    decrement.forEach((button) => {
        button.addEventListener('click', (event) => {
            let id = Number(button.dataset.id);
            let product = cartItems.find((item) => item.id === id);
            if (product.quantity === 1) {
                cartItems = cartItems.filter(item => item.id !== product.id)
                saveProduct()
                cardAddRightRenderFunction()
                totalPriceFunction()
            } else {
                product.quantity--
                saveProduct()
                cardAddRightRenderFunction()
                totalPriceFunction()
            }
        })

    });

}
function productincremes(params) {
    let increment = document.querySelectorAll('.increment')
    increment.forEach((button) => {
        button.addEventListener('click', (event) => {
            let id = Number(button.dataset.id);
            let product = cartItems.find((item) => item.id === id);
            product.quantity++
            saveProduct()
            cardAddRightRenderFunction()
            totalPriceFunction()
        })

    })
}
function totalPriceFunction(params) {
    let totalPrice = cartItems.reduce((total, item) => {
       let price = total + item.productPrice + (item.productPriceDismal / 100)
       price = price * item.quantity
       priceDisplay.textContent = price.toFixed(2);   
    },0)
    
    saveProduct()
    cardAddRightRenderFunction()
    
}
totalPriceFunction()

