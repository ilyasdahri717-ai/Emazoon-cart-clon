// import { productList } from "./data.js";
// const card = document.querySelector('.card');
const cartPopUp = document.getElementById('cart_pop_up');
const productCart = document.getElementById('card');
const addCart = document.getElementById('add-cart');

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
    }
];


let products = [];
let cart = [];


function renderProduct() {
    productList.forEach((product) => {
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
        addProduct(product)
    })
};
renderProduct();

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
let cart2 = [];

function addProduct(params) {
    const adToPopCart = document.querySelectorAll('.card_button_box');
    adToPopCart.forEach((button) => {
        button.addEventListener('click', (event) => {
            let id = Number(button.id)
            cart = productList.find((item) => item.id === id);
            cartPopUp.classList.remove('disply_none');
            coatPopUpRender(cart);
            popUpCloseFunction(cart);
        })
    })
    
};
const rightCart = document.querySelector('.card_left_count');
const cardAddRight = document.getElementById('card');
const rightAddcard = document.querySelector('.left_add_cart')

function popUpCloseFunction(prod) {
    
    const popCloseTop = document.getElementById('pop_close_one');
    const cancelCart = document.getElementById('cancel-cart');
    const addCartBtn = document.getElementById('add-cart');
    addCartBtn.addEventListener('click', (event) => {
        cartPopUp.classList.add('disply_none');
        addCartBtnFunction(event,prod);
    })
    popCloseTop.addEventListener('click', () => {
        cartPopUp.classList.add('disply_none');
    });
    cancelCart.addEventListener('click', () => {
        cartPopUp.classList.add('disply_none');
    })
}
function addCartBtnFunction(params, prod) {
    let existingProduct = cart2.find(item => item.id === cart.id);
    
    if (existingProduct) {
       cart2 = cart2.filter((item)=>{
        if (item.id === existingProduct.id) {
            return item.quantity++
        }
       })
        // console.log(cart2);   
    } else {
        cart2.push({
        id: cart.id,
        productName: cart.productName, 
        productPrice: cart.productPrice,
        productPriceDismal: cart.productPriceDismal,
        productDate: cart.productDate,
        img: cart.img,
        quantity: 1,
        })
    }
    
    rightCart.classList.remove('disply_none');
    cardAddRight.classList.remove('grid_4');
    cardAddRight.classList.add('grid_3');
    cardAddRightRenderFunction()
}
function cardAddRightRenderFunction(params) {
    rightAddcard.innerHTML = "";
    cart2.forEach((product)=>{
        console.log(cart2);
        
        rightAddcard.innerHTML += `
        <li>
            <div class="left_card_img_box flex_box">
                <img src="aside/imags/card_imgs_nobg/${product.img}" alt="">
            </div>
            <div class="Limited_time_div">
                <span>Limited time</span>
                <span>PKR ${product.productPrice}.${product.productPriceDismal}</span>
            </div>
            <div class="left_card_btn_div">
                <button><span class="fa-solid fa-plus"></span></button>
                <div class="count_div">
                    <span>${product.quantity}</span>
                </div>
                <button><span class="fa-solid fa-plus"></span></button>
            </div>
        </li>
    `
    })
    
}
