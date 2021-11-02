const data = {
  upper_body: [
    {
      id: 1,
      name: "HOME CREWNECK",
      img: "./assets/crewneck_white.png",
      price: "39.99",
      sale_price: "30.99",
      tags: ["crewneck", "sweatshirt"],
      sizes: ["S", "M", "L"],
      description:
        "Super comfy, but still stylish sweatshirt with our big logo on in the front.",
      gender: ["women", "men", "unisex"],
      color: "white",
      url: "crewneck.html",
    },

    {
      id: 2,
      name: "HOME T-SHIRT",
      img: "./assets/shirt_black.png",
      price: "24.99",
      sale_price: "",
      tags: ["tshirt", "black"],
      sizes: ["M", "L"],
      description:
        "White Logo on a black fittet t-shirt. Perfect for daily use and nights out.",
      gender: ["men", "women"],
      color: "black",
      url: "shirt_men_black.html",
    },

    {
      id: 3,
      name: "DAILY T-SHIRT",
      img: "./assets/shirt_wmn_white.png",
      price: "19.99",
      sale_price: "",
      tags: ["tshirt", "white"],
      sizes: ["S"],
      description:
        "Cozy and a bit oversized t-shirt with small logo on the lower left edge. Perfect for chill, gym, but works well with smart outfits too.",
      gender: ["women"],
      color: "white",
      url: "shirt_wmn_white.html",
    },
  ],
};

var sortClicked = false;
var filterClicked = false;
var sideClicked = false;

var basket = [];
var basketIds = "";

const handleClick = () => {
  data["upper-body"].forEach((key) => {
    console.log(key.img);
  });
};

const handleSort = () => {
  if (sortClicked) {
    document.getElementById("sort-list").className = "hidden";
    sortClicked = false;
  } else {
    document.getElementById("sort-list").className = "open";
    sortClicked = true;
  }
};

const handleFilter = () => {
  if (filterClicked) {
    document.getElementById("filter-list").className = "hidden";
    filterClicked = false;
  } else {
    document.getElementById("filter-list").className = "open";
    filterClicked = true;
  }
};

const handleCart = () => {
  if (document.getElementById("card-preview").className === "card-open") {
    document.getElementById("card-preview").className = "card-hidden";
  } else document.getElementById("card-preview").className = "card-open";
};

const handleSideBar = () => {
  if (!sideClicked) {
    document.getElementById("side-bar").style.transform = "none";
    sideClicked = true;
    document.getElementById("menu-icon").style.display = "none";
    document.getElementById("close-icon").style.display = "flex";
  } else {
    document.getElementById("side-bar").style.transform = "translateX(-100vw)";
    sideClicked = false;
    document.getElementById("menu-icon").style.display = "flex";
    document.getElementById("close-icon").style.display = "none";
  }
};

const addItems = (sex) => {
  data.upper_body.forEach((element) => {
    console.log(element);

    if (element.gender.includes(sex)) {
      var item = `<div><a href="${element.url}">
                    <img src="${element.img}" />

                    <div class="price-tag">

                    <span>${element.name}</span> 

                    <span>${element.price}</span> 

                    <span>
                        <div class="sizes-icon">S</div>
                        <div class="sizes-icon">M</div>
                        <div class="sizes-icon">L</div>
                    </span>

                    </div>

                </a></div>`;

      document.getElementById("wmn-items").innerHTML += item;
    }
  });
};

const addtoBasket = (props) => {
  if (
    typeof window.localStorage.getItem("basket") === "string" ||
    window.localStorage.getItem("basket") instanceof String
  ) {
    basketIds = window.localStorage.getItem("basket");
  } else basketIds = "";

  var basketNew = basketIds.concat(",", props);

  basket = [];

  window.localStorage.setItem("basket", basketNew);

  // basketNot();

  updateBasket();

  document.getElementById("card-preview").className = "card-open";
};

const removeBasket = (val) => {
  const expr = "," + val;

  const str = window.localStorage.getItem("basket").replace(expr, "");

  window.localStorage.setItem("basket", str);

  document.getElementById(val).remove();

  updateBasket();

  // basketNot();
};

const basketNot = () => {
  var noItems = `
        <div>
            <h3>NO ITEMS ADDED, KEEP SHOPPING!</h3>
        </div>
    `;

  if (window.localStorage.getItem("basket") !== "") {
    document.getElementById(
      "card-preview"
    ).innerHTML += `<button id="checkout-open" onclick="location.href='basket.html'">CHECKOUT</button>`;
  } else {
    document.getElementById("card-preview").innerHTML += noItems;
  }
};

const listItems = () => {
  data.upper_body.forEach((element) => {
    console.log(element);

    var item = `<div class="grid-item"><a href="${element.url}">
                    <img src="${element.img}" />

                    <div class="price-tag">

                    <span>${element.name}</span> 

                    <span>${element.price}</span> 

                    <span>
                        <div class="sizes-icon">S</div>
                        <div class="sizes-icon">M</div>
                        <div class="sizes-icon">L</div>
                    </span>

                    </div>

                </a></div>`;

    document.getElementById("scroll-wrap").innerHTML += item;
  });
};

const saleItems = () => {
  data.upper_body.forEach((element) => {
    console.log(element);

    if (element.sale_price !== "") {
      var item = `<div class="grid-item"><a href="${element.url}">
                    <img src="${element.img}" />

                    <div class="price-tag">

                    <span>${element.name}</span> 

                    <span class="sale-price">${element.sale_price}</span> 

                    <span>
                        <div class="sizes-icon">S</div>
                        <div class="sizes-icon">M</div>
                        <div class="sizes-icon">L</div>
                    </span>

                    </div>

                </a></div>`;

      document.getElementById("wmn-items").innerHTML += item;
    }
  });
};

const fillProductPage = (prop) => {
  data.upper_body.forEach((element) => {
    console.log(element);

    if (prop == element.id) {
      var item = `
                <div class="project-pic">
                    <img src="${element.img}" />
                </div>

                <div class="product-description-grid">
                    <h2 id="product-name">${element.name}</h2>

                    <h3 id="product-tags">${element.tags}</h3>

                    <h4 id="product-description">${element.description}</h4>

                    <div class="price-tag">
                        <div class="sizes-icon no-size">S</div>
                        <div class="sizes-icon">M</div>
                        <div class="sizes-icon">L</div>
                    </div>

                    <div class="price">
                        <h1 id="product-price">${element.price}</h1>
                    </div>

                    <button class="add-to-basket" onclick="addtoBasket(${element.id})">
                        <h4>ADD TO BASKET</h4>
                    </button>
                </div>

                <div class="other-colors">
                    <span class="other-title">CHECK OTHER COLORS:</span>
                    <img src="${element.img}" />
                    <img src="${element.img}" />
                    <img src="${element.img}" />
                </div>
                `;

      document.getElementById("product-layout-page").innerHTML += item;
    }
  });
};

const updateBasket = (prop) => {
  document.getElementById("card-preview").innerHTML = "";

  if (prop !== "checkout") {
    basketNot();
  }

  if (
    typeof window.localStorage.getItem("basket") === "string" ||
    window.localStorage.getItem("basket") instanceof String
  ) {
    basketIds = window.localStorage.getItem("basket");
  } else basketIds = "";

  basket = basketIds.split(",");

  console.log(basket);

  data.upper_body.forEach((element) => {
    for (let i = 0; i < basket.length; i++) {
      var item = "";

      if (element.id == basket[i]) {
        basket.push(element);

        item += `
                    <div id="${element.id}">
                        <img class="miniature" src="${element.img}" />
                        <p>${element.name}</p>
                        <p class="price-mini">${element.price}</p>
                        <span class="material-icons" onClick="removeBasket(${element.id})"> delete </span>
                    </div>`;
      }

      document.getElementById("card-preview").innerHTML += item;
    }
  });

  basket = [];
};
