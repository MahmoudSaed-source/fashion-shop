// data item-prodcut
let dataprodects = [
  {
    id: 1,
    title: "Mama T-Shirt",
    price: 10.5,
    url: "img/img prodect/001.jpg",
  },
  {
    id: 2,
    title: "Flower Black T-Shirt",
    price: 10.5,
    url: "img/img prodect/002.jpg",
  },
  {
    id: 3,
    title: "Pink-Flower T-Shirt",
    price: 10.5,
    url: "img/img prodect/003.jpg",
  },
  {
    id: 4,
    title: "Butterfly T-Shirt ",
    price: 10.5,
    url: "img/img prodect/004.jpg",
  },
  {
    id: 5,
    title: "tshirt summer",
    price: 15,
    url: "img/img prodect/tshirt summer.jpg",
  },
  {
    id: 6,
    title: "deer t-shirt    ",
    price: 9,
    url: "img/img prodect/006.jpg",
  },
  {
    id: 7,
    title: "love t-shirt",
    price: 14,
    url: "img/img prodect/love.jpg",
  },
  {
    id: 8,
    title: "maka your own t-shirt",
    price: 16,
    url: "img/img prodect/maka your own.png",
  },
  {
    id: 9,
    title: "floral necklace t-shirt    ",
    price: 18,
    url: "img/img prodect/009.jpg",
  },
  {
    id: 10,
    title: "feather necklace t-shirt ",
    price: 9,
    url: "img/img prodect/0010.jpg",
  },
  {
    id: 11,
    title: "beauty t-shirt",
    price: 13,
    url: "img/img prodect/0011.jpg",
  },
  {
    id: 12,
    title: "cat women t-shirt",
    price: 15.5,
    url: "img/img prodect/0012.jpg",
  },
];

//display content body

let content_prodect_item = document.querySelector(".content-prodect");
let Add_to_cart_span = document.querySelector(".add-to-cart");
const displayHtml = function (products) {
  const data = products.map((prode) => {
    return ` <div class="prodect">
    <div class="img-prodect">
        <img src="${prode.url}" alt="">
    </div>
    <h3>${prode.title}</h3>
    <div class="footer_product">
        <h3>$${prode.price}</h3>
        <i class="fas fa-cart-plus cart-icon" data-id = "${prode.id}"></i>
    </div>
</div>`;
  });
  content_prodect_item.innerHTML += data;
};
displayHtml(dataprodects);

//end display content body

// start landding_img _random

let images = [
  "./img/landding_img/001.jpg",
  "./img/landding_img/007.jpeg",
  "./img/landding_img/002.jpg",
  "./img/landding_img/003.jpg",
  "./img/landding_img/004.jpg",
  "./img/landding_img/005.jpg",
  "./img/landding_img/006.jpg",
  "./img/landding_img/008.jpeg",
];
img_landding = document.querySelector(".ImgLandding");

setInterval(() => {
  let _random_index = Math.floor(Math.random() * images.length);
  img_landding.src = images[_random_index];
}, 5000);

// end  landding_img _random

//  add toggle class

let CartContainer = document.querySelector(".cart_container");
let ContainerITem = document.querySelector(".container-item");
let CartIcon = document.querySelector(".cart-icon-link");
let totle = document.querySelector(".totle");
CartIcon.onclick = function () {
  CartContainer.classList.toggle("OpenCart");
};
//  end  add toggle class

//add item to cartin
let Buttons = [...document.querySelectorAll(".cart-icon")];
let count_of_item_incart = document.querySelector(".count-of-item");

let cart = [];

Buttons.forEach((btn) => {
  let ID = btn.dataset.id;
  btn.addEventListener("click", (e) => {
    let element = e.target;
    element.classList.add("disper");
    if (cart.includes(ID)) {
    } else {
      cart.push(ID);
      dataprodects.forEach((item) => {
        if (item.id == ID) {
          ContainerITem.innerHTML += `<div class="product_display" data-id = ${item.id}>
        <div class="product_img">
          <img src="${item.url} " alt="" />
        </div>
          <div class="product_name">
          <h3>${item.title}</h3>
        </div>
        <div class="amount-count">
          <input class="count" type="number" value="1" name="" id="count" min="1" data-id=${item.id} />
          <span class = "price">${item.price}</span> 
        </div>
        <div class="RemoveIcon">
          <button type="button" class="btn btn-danger">
            <i class="fas fa-trash-alt  remove" data-id= ${item.id}></i>
          </button>
        </div>
      </div> `;
        }
      });
      remove();
      PriceProduct();
      CartContainer.classList.add("OpenCart");
      setTimeout(() => {
        CartContainer.classList.remove("OpenCart");
      }, 1000);
    }
  });
});
// end add item to cart

//start open img to show on big size

let ImgProduct = document.querySelectorAll(".prodect img");
let imgpreviwe = document.querySelector(".imgpreviwe");
let imgViweDom = document.querySelector(".imgViweDom");
let closeBtn_viwe = document.querySelector(".close_viweImg i");

ImgProduct.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgpreviwe.src = e.target.src;
    imgViweDom.classList.add("active");
  });
});

closeBtn_viwe.onclick = () => {
  imgViweDom.classList.remove("active");
};

//end open img to show on big size

// this function to updata the count number on input number مهم جدا
//  يعمل تحديث للعربه ومعها تحديث عدد المنتجات والسعر cart  ده فنكيشن علشان لما تدوس فى اى مكان فى ال
CartContainer.addEventListener("click", () => {
  PriceProduct();
});

// start price count

function PriceProduct() {
  const allproducts = [...document.querySelectorAll(".product_display")];
  let totlePrice = 0;
  let totlecount = 0;
  allproducts.forEach((product) => {
    let price = Number(product.getElementsByClassName("price")[0].innerHTML);
    const count = Number(product.getElementsByClassName("count")[0].value);
    console.log(count);
    totlePrice = +totlePrice + price * count;
    totlecount = +totlecount + count;
  });
  totle.innerText = ` $ ${totlePrice}  `;
  count_of_item_incart.innerHTML = totlecount;
}
// end price count

// start remove product from cart
function remove() {
  let removeBtn = document.querySelectorAll(".remove");

  removeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(btn.dataset.id);
      if (cart.includes(btn.dataset.id)) {
        for (let i = 0; i < cart.length; i++) {
          if (cart[i] == btn.dataset.id) {
            cart.splice(i, 1);
          }
        }
      }
      Buttons.forEach((add) => {
        let Add_Id = add.dataset.id;
        if (btn.dataset.id == Add_Id) {
          add.classList.remove("disper");
        }
      });

      btn.parentElement.parentElement.parentElement.remove();
    });
  });
}
// end remove product from cart

//  start button close
let closeBtn = document.querySelector(".close");
closeBtn.onclick = () => {
  CartContainer.classList.remove("OpenCart");
};
//  end button close

// start clear Button
let clearBtn = document.querySelector(".clear");
clearBtn.onclick = () => {
  ContainerITem.innerHTML = "";
  cart = [];
  Buttons.forEach((add) => {
    add.classList.remove("disper");
  });
};
// end clear Button

// start slider

let mycont = Array.from(document.querySelectorAll(".continer img")),
  mylengthofArr = mycont.length,
  corantslid = 1,
  mynumberslid = document.getElementById("slidernumber"),
  nextbutton = document.getElementById("next"),
  prevbutton = document.getElementById("prev"),
  mypad = document.getElementById("pad '");

nextbutton.onclick = next;
prevbutton.onclick = prev;

chacer();
function next() {
  if (nextbutton.classList.contains("nextdisable")) {
  } else {
    corantslid++;
    chacer();
  }
}
function prev() {
  if (prevbutton.classList.contains("prevdisabled")) {
  } else {
    corantslid--;
    chacer();
  }
}
let myul = document.createElement("ul");
myul.setAttribute("id", "ulpadintion");
myul.setAttribute("className", "ulpadintion");
let i;
for (i = 1; i <= mylengthofArr; i++) {
  let paditem = document.createElement("li");
  paditem.textContent = i;
  myul.appendChild(paditem);
  paditem.setAttribute("data", i);
}
document.getElementById("pad").appendChild(myul);
let poltion = Array.from(document.querySelectorAll("#ulpadintion li"));
for (let i = 0; i < poltion.length; i++) {
  poltion[i].onclick = function () {
    corantslid = parseInt(this.getAttribute("data"));
    chacer();
  };
}

chacer();

function chacer() {
  mynumberslid.textContent = corantslid + "    /  " + mylengthofArr;
  removeallclass();
  mycont[corantslid - 1].classList.add("active");
  if (corantslid == 1) {
    prevbutton.classList.add("prevdisabled");
  } else {
    prevbutton.classList.remove("prevdisabled");
  }
  if (corantslid == mylengthofArr) {
    nextbutton.classList.add("nextdisable");
  } else {
    nextbutton.classList.remove("nextdisable");
  }
}

function removeallclass() {
  mycont.forEach(function (img) {
    img.classList.remove("active");
  });
}
// end slider img

// start shoes viwe images
let shoesimages = [
  "./img/shoes/130.jpg",
  "./img/shoes/131.jpg",
  "./img/shoes/132.jpg",
  "./img/shoes/133.jpg",
  "./img/shoes/134.jpg",
  "./img/shoes/135.jpg",
  "./img/shoes/136.jpg",
  "./img/shoes/137.jpg",
  "./img/shoes/138.jpg",
  "./img/shoes/139.jpg",
  "./img/shoes/140.jpg",
  "./img/shoes/141.jpg",
  "./img/shoes/142.jpg",
  "./img/shoes/143.jpg",
  "./img/shoes/144.jpg",
  "./img/shoes/145.jpg",
  "./img/shoes/146.jpg",
  "./img/shoes/147.jpg",
];

let img_viwe = document.querySelector(".shoesimg");

setInterval(() => {
  let rendom_img_shoes = Math.floor(Math.random() * shoesimages.length);
  img_viwe.src = shoesimages[rendom_img_shoes];
}, 2000);

// end shoes viwe images

// start menu bar
let menu_bar = document.querySelector(".menu_icon");
let title_bar = document.querySelector(".title_bar");
let menu_link = document.querySelector(".sit_link");
console.log(menu_link);
menu_bar.onclick = function () {
  menu_link.classList.remove("sit_link");
  menu_link.classList.add("mob_link");
  menu_link.classList.toggle("open");
  
 
};

