const productList = [
    {
        id: 1,
        productName: "WIHOLL Summer Dresses Cap Sleeve Crewneck Maxi Long Casual Dress with Pockets Beach Vacation Sundresses 2026 Trendy",
        productPrice: 4162,
        productPriceDismal: 25,
        productDate: "Wed, Jul 29",
        img: "card-img1.png",
        quantity: 1,
        sizes: [
            {
                size: "x-Smill"
            },
            {
                size: "Smill",

            },
            {
                size: "Medium",

            },
            {
                size: "Large",

            },
            {
                size: "x-Large"
            }
        ]
    },
    {
        id: 2,
        productName: "Zeagoo Summer Dresses for Women Casual A Line Dress 2026 V Neck Short Dresses Floral Sundress Pleated Boho Dress",
        productPrice: 3745,
        productPriceDismal: 18,
        productDate: "mon, Aug 4",
        img: "card-img2.png",
        quantity: 1,
        sizes: [
            {
                size: "Smill",

            },
            {
                size: "Medium",

            },
            {
                size: "Large",

            },
        ]
    },
    {
        id: 3,
        productName: "WIHOLL Summer Dresses Cap Sleeve Crewneck Maxi Long Casual Dress with Pockets Beach Vacation Sundresses 2026 Trendy",
        productPrice: 5553,
        productPriceDismal: 34,
        productDate: "Thu, Jul 30",
        img: "card-img3.png",
        quantity: 1,
        sizes: [
            {
                size: "Smill",

            },
            {
                size: "Medium",

            },
            {
                size: "Large",

            },
        ]
    },
    {
        id: 4,
        productName: "WIHOLL Summer Dresses Cap Sleeve Crewneck Maxi Long Casual Dress with Pockets Beach Vacation Sundresses 2026 Trendy",
        productPrice: 7450,
        productPriceDismal: 25,
        productDate: "Wed, Apr 20",
        img: "card-img4.png",
        quantity: 1,
        sizes: [
            {
                size: "Smill",

            },
            {
                size: "Medium",

            },
            {
                size: "Large",

            },
        ]
    },
    {
        id: 5,
        productName: "WIHOLL Summer Dresses Cap Sleeve Crewneck Maxi Long Casual Dress with Pockets Beach Vacation Sundresses 2026 Trendy",
        productPrice: 1450,
        productPriceDismal: 5,
        productDate: "Wed, Apr 20",
        img: "card-img5.png",
        quantity: 1,
        sizes: [
            {
                size: "Smill",

            },
            {
                size: "Medium",

            },
            {
                size: "Large",

            },
        ]
    },
    {
        id: 6,
        productName: "WIHOLL Summer Dresses Cap Sleeve Crewneck Maxi Long Casual Dress with Pockets Beach Vacation Sundresses 2026 Trendy",
        productPrice: 450,
        productPriceDismal: 99,
        productDate: "Wed, Apr 20",
        img: "card-img6.png",
        quantity: 1,
        sizes: [
            {
                size: "Smill",

            },
            {
                size: "Medium",

            },
            {
                size: "Large",

            },
        ]
    },
    {
        id: 7,
        productName: "WIHOLL Summer Dresses Cap Sleeve Crewneck Maxi Long Casual Dress with Pockets Beach Vacation Sundresses 2026 Trendy",
        productPrice: 450,
        productPriceDismal: 99,
        productDate: "Wed, Apr 20",
        img: "card-img6.png",
        quantity: 1,
        sizes: [
            {
                size: "Smill",

            },
            {
                size: "Medium",

            },
            {
                size: "Large",

            },
        ]
    }
];



const cartPopUp = document.getElementById('cart_pop_up');
const productCart = document.getElementById('card');
const addCart = document.getElementById('add-cart');
const rightCart = document.querySelector('.card_left_count');
const cardAddRight = document.getElementById('card');
const rightAddcard = document.querySelector('.left_add_cart')
const priceDisplay = document.getElementById('total_price')
const cartCount = document.querySelector('.cart_count')

let save = localStorage.getItem('cartItems')
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

productCart.addEventListener('click', (event) => {
    let id = Number(event.target.id);
    const div = event.target.closest(".card_button_box");
    if (!div) return
    if (div.classList.contains('card_button_box')) {
        cartButtonFunction(id)
    }
})

function renderProduct() {

    productCart.innerHTML = "";
    productList.forEach((product) => {
        const { sizes } = product;
        //   let e = sizes.map((item)=> item.size)
        sizes.forEach((item) => {
            // console.log(item.size[0]);

        })



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
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div> `
    })
};
renderProduct();
cardAddRightRenderFunction()

function addCartBtnFunction({
    id,
    productName,
    productPrice,
    productPriceDismal,
    productDate,
    img,
    quantity
}) {

    let existingProduct = cartItems.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity++
        saveProduct()
        cardAddRightRenderFunction()
    } else {
        cartItems.push({
            id: id,
            productName: productName,
            productPrice: productPrice,
            productPriceDismal: productPriceDismal,
            productDate: productDate,
            img: img,
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
        totalItemFunction()
    }
}
function cartButtonFunction(id) {
    const product = productList.find((item) => item.id === id);
    cartPopUp.classList.remove('disply_none');
    coatPopUpRender(product);
}
let sizeAdd = 'smell';
function sizeAddFunction(productSize) {
    let prod = productSize;
    sizeAdd = prod

}
console.log();



function coatPopUpRender({
    id,
    productName,
    productPrice,
    productPriceDismal,
    productDate,
    img,
    sizes,
}) {
    
    
    cartPopUp.innerHTML = '',
        cartPopUp.innerHTML = `
    <div>
            <div class="cart_hader">
                <i class="fa-solid fa-x close" id="pop_close_one"></i>
            </div>
            <hr class="hr_lin">
            <div class="cart_ifo">
                <div class="cart_prot_datl">
                    <div class="cart_img">
                        <img width="35px" src="aside/imags/card_imgs_nobg/${img}" alt="">
                    </div>
                    <div class="cart_prod_mane">
                        <div class="summer_dras">
                            <span>${productName}</span>
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
                        <div class="size_list_a">    
                        <span class="add-size-spn">${sizeAdd}<i class="fa-solid fa-angle-down siz-don"></i>
                        </div>
                        <ul class="disply_none" id="size-box">
                        </ul>
                        </span>
                        </div>
                        
                        
                    </div>
                    <div class="prod_pric">
                        <div class="prise_pkr">
                            <span>PKR</span>
                            <span>${productPrice}</span>
                            <span>${productPriceDismal}</span>
                        </div>
                        <div class="old_prs">
                            <span>List :</span>
                            <span><span class="text_nune">PKR 6,665.02</span></span>
                        </div>
                    </div>
                    <div class="lin_div"></div>
                    <div class="new_pric">
                        <span>PKR 11,940.92 delivery </span>
                        <span>${productDate}</span>
                    </div>
                    <div class="add_cart_box" data-id="${id}">
                        <span class="cencel-cart-c" id="cancel-cart">
                            <button>Cancel</button>
                        </span>
                        <span class="cart_add_t" id="add-cart">
                            <button>Add to cart</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `
    sizes.forEach((item)=>{
       let sizeBoxId = document.getElementById('size-box');
       let li = document.createElement('li');
       li.textContent = item.size;
       li.className = 'product-size';
       sizeBoxId.appendChild(li)
       console.log(li);
       
    })
};


cartPopUp.addEventListener('click', (event) => {
    const sizeBox = document.getElementById('size-box')
    const size = event.target.closest(".size_list_a")
    let productSize = event.target.closest(".product-size")
    const addCart = event.target.closest("#add-cart");
    const cancelCart = event.target.closest("#cancel-cart");

    if (productSize) {
        sizeBox.classList.add('disply_none')

    }

    if (size) {
        sizeBox.classList.toggle('disply_none')

    }

    if (addCart) {
        const box = event.target.closest(".add_cart_box");

        const id = Number(box.dataset.id);

        const product = productList.find(item => item.id === id);

        addCartBtnFunction(product);
        const addSizeSpan = document.querySelector(".add-size-spn");
        addSizeSpan.textContent = productSize.textContent;

    }

    if (cancelCart) {
        cartPopUp.classList.add('disply_none');
    }

}, false)


function cardAddRightRenderFunction() {
    rightAddcard.innerHTML = "";
    cartItems.forEach(({
        id,
        productName,
        productPrice,
        productPriceDismal,
        productDate,
        img,
        quantity
    }) => {
        rightAddcard.innerHTML += `
        <li>
            <div class="left_card_img_box flex_box">
                <img src="aside/imags/card_imgs_nobg/${img}" alt="">
            </div>
            <div class="Limited_time_div">
                <span>Limited time</span>
                <span>PKR ${productPrice}.${productPriceDismal}</span>
            </div>
            <div  class="left_card_btn_div">
                <button class="decrement" data-id="${id}"><span class="product_decrement">-</span></button>
                <div class="count_div">
                    <span>${quantity}</span>
                </div>
                <button class="increment" data-id="${id}"><span class="product_increment">+</span></button>
            </div>
        </li>
    `
    })
}
// --------------------------secind------------------

rightAddcard.addEventListener('click', (event) => {
    const button = event.target.closest("button");
    // console.log(button)
    const id = Number(button.dataset.id)

    if (button.classList.contains("increment")) {
        productIncrement(id);
    }

    if (button.classList.contains("decrement")) {
        // console.log(id);
        productDecrement(id)

    }
})

function productDecrement(id) {
    let product = cartItems.find((item) => item.id === id);
    if (product.quantity === 1) {
        cartItems = cartItems.filter(item => item.id !== product.id)
        saveProduct()
        cardAddRightRenderFunction()
        totalPriceFunction()
        totalItemFunction()
    } else {
        product.quantity--
        saveProduct()
        cardAddRightRenderFunction()
        totalPriceFunction()
        totalItemFunction()
    }
}
function productIncrement(id) {
    let product1 = cartItems.find((item) => item.id === id);
    product1.quantity++;
    saveProduct()
    cardAddRightRenderFunction()
    totalPriceFunction()
    totalItemFunction()
}
function totalPriceFunction(params) {
    let totalPrice = cartItems.reduce((total, item) => {
        let b = 0;
        let price = item.productPrice + item.productPriceDismal / 100
        price = price * item.quantity
        return total += price;
    }, 0)
    priceDisplay.textContent = totalPrice.toFixed(2)

}
totalPriceFunction()

function totalItemFunction() {
    let totalItem = 0;
    cartItems.forEach((value) => {
        totalItem += value.quantity;
    })
    cartCount.textContent = totalItem
}
totalItemFunction()

