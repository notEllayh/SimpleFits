// // Product Details Page Script 
// document.addEventListener("DOMContentLoaded", () => {

// // Cart Functionality 
// let cart = JSON.parse(localStorage.getItem("cart")) || [];
// let selectedSize = null;

//     // Product details page logic
//     const productNameEl = document.getElementById("product-name");

//     // Code only runs on product details page
//     if (!productNameEl) return; // Not product page, skip

//     const params = new URLSearchParams(window.location.search);
//     const productId = parseInt(params.get("id"));
//     const product = products.find(p => p.id === productId);

//     if (!product) {
//         document.body.innerHTML = "Product not found";
//         return;
//     }

//     // Change page title
//     document.title = `SimpleFit | ${product.name} | Offical Online Store`; 

//     // Product details
//     productNameEl.textContent = product.name;
//     document.getElementById("product-image").src = product.image;
//     document.getElementById("product-price").textContent = `$${product.price}`;
//     document.getElementById("product-brand").textContent = product.brand;
//     document.getElementById("product-description").textContent = product.description;

//     // Sizes
//     // product.sizes.forEach(size => {
//     //     document.getElementById("sizes").innerHTML += `<button>${size}</button>`;
//     // });

//     const sizesDiv = document.getElementById("sizes");
//     sizesDiv.innerHTML = "";

//     product.sizes.forEach(size => {
//       const btn = document.createElement("button");
//       btn.textContent = size;
//       btn.className =
//         "bg-red-500 cursor-pointer text-white font-medium px-4 py-2 rounded hover:bg-black hover:text-red-500 transition duration-300 ease-in-out";

//       btn.addEventListener("click", () => {
//         selectedSize = size;

//         document.querySelectorAll("#sizes button").forEach(b => {
//           b.classList.remove("bg-black", "text-white");
//         });

//         btn.classList.add("bg-black", "text-white");
//         document.getElementById("size-error")?.classList.add("hidden");
//       });

//       sizesDiv.appendChild(btn);
//     });

//     // Add to cart functionality 
//     document.getElementById("add-to-cart").addEventListener("click", () => {
//         // Ensure size is selected
//         if (!selectedSize) {
//             document.getElementById("size-error").classList.remove("hidden");
//             return;
//         } 

//         const cart = JSON.parse(localStorage.getItem("cart")) || [];
//         const existingItem = cart.find(item => item.id === product.id && item.size === selectedSize);

//         if (existingItem) {
//             existingItem.quantity += 1;
//         } else { 
//           cart.push({
//             id: product.id,
//             name: product.name,
//             price: product.price,
//             image: product.image,
//             size: selectedSize,
//             quantity: 1
//           });
//         }
        
//         localStorage.setItem("cart", JSON.stringify(cart));
//         alert(`${product.name} (${selectedSize}) added to cart`);
//     });

    

//     // Cart count update
//     const cartCountEl = document.getElementById("cart-count");

// if (cartCountEl) {
//   const count = cart.reduce((sum, item) => sum + item.quantity, 0);
//   cartCountEl.textContent = count;
// } 

// console.log("Cart page loaded. Cart contents:", localStorage.getItem("cart"));

// // Cart page logic
// const cartItemsDiv = document.getElementById("cart-items");

// if (cartItemsDiv) {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];

//   if (cart.length === 0) {
//     document.getElementById("cart-empty").style.display = "block";
//     return;
//   }

//   let total = 0;
//   cartItemsDiv.innerHTML = "";

//   cart.forEach((item, index) => {
//     total += item.price * item.quantity;

//       cartItemsDiv.innerHTML += `
//         <div class="flex items-center justify-between mb-6 border-b pb-3">
//           <div class="flex items-center space-x-4">
//             <img src="${item.image}" width="80" alt="${item.name}" />
//             <div>
//               <p class="font-medium">${item.name}</p>
//               <p>Size: ${item.size}</p>
//               <p>Qty: ${item.quantity}</p>
//             </div>
//           </div>
//           <div>
//             <p class="font-medium">$${(item.price * item.quantity).toFixed(2)}</p>
//             <button onclick="removeFromCart(${index})" class="text-red-500 hover:underline mt-1">Remove</button>
//           </div>
//         </div>
//       `;
//   });

//   document.getElementById("cart-total").textContent =
//     `Total: $${total.toFixed(2)}`;
// }
// }); 

// function removeFromCart(index) {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   cart.splice(index, 1);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   location.reload();
// } 

document.addEventListener("DOMContentLoaded", () => {

  // ------------------------
  // Cart setup
  // ------------------------
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Update all cart counts in navbar
  function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll("#cart-count").forEach(el => el.textContent = count);
  }
  updateCartCount();

  // ------------------------
  // Product Details Page
  // ------------------------
  const productNameEl = document.getElementById("product-name");
  if (productNameEl) {
    let selectedSize = null;

    // Get product from URL
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));
    const product = products.find(p => p.id === productId);

    if (!product) {
      document.body.innerHTML = "Product not found";
      return;
    }

    // Change page title
    document.title = `SimpleFit | ${product.name} | Official Online Store`;

    // Fill product details
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-price").textContent = `$${product.price}`;
    document.getElementById("product-brand").textContent = product.brand;
    document.getElementById("product-description").textContent = product.description;

    // Fill sizes
    const sizesDiv = document.getElementById("sizes");
    sizesDiv.innerHTML = "";
    product.sizes.forEach(size => {
      const btn = document.createElement("button");
      btn.textContent = size;
      btn.className =
        "bg-red-500 cursor-pointer text-white font-medium px-4 py-2 rounded hover:bg-black hover:text-red-500 transition duration-300 ease-in-out";

      btn.addEventListener("click", () => {
        selectedSize = size;

        // Remove selected styling from all buttons
        sizesDiv.querySelectorAll("button").forEach(b => {
          b.classList.remove("bg-black", "text-white");
          b.classList.add("bg-red-500", "text-white");
        });

        // Add selected styling
        btn.classList.add("bg-black", "text-white");
        btn.classList.remove("bg-red-500");

        // Hide error if visible
        document.getElementById("size-error")?.classList.add("hidden");
      });

      sizesDiv.appendChild(btn);
    });

    // Add to Cart button
    document.getElementById("add-to-cart").addEventListener("click", () => {
      if (!selectedSize) {
        document.getElementById("size-error")?.classList.remove("hidden");
        return;
      }

      const existingItem = cart.find(item => item.id === product.id && item.size === selectedSize);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: selectedSize,
          quantity: 1
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      alert(`${product.name} (${selectedSize}) added to cart`);
    });
  }

  // ------------------------
  // Cart Page
  // ------------------------
 function renderCartItems() {
  const cartItemsDiv = document.getElementById("cart-items");
  if (!cartItemsDiv) return;

  cartItemsDiv.innerHTML = "";

  if (cart.length === 0) {
    document.getElementById("cart-empty")?.classList.remove("hidden");
    document.getElementById("cart-total").textContent = "";
    return;
  }

  document.getElementById("cart-empty")?.classList.add("hidden");

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    cartItemsDiv.innerHTML += `
      <div class="flex items-center justify-between mb-6 border-b pb-3">
        <div class="flex items-center space-x-4">
          <img src="${item.image}" width="80" alt="${item.name}" />
          <div>
            <p class="font-medium">${item.name}</p>
            <p>Size: ${item.size}</p>
            <div class="flex items-center space-x-2 mt-1">
              <button onclick="updateQuantity(${index}, -1)" class="px-2 bg-gray-200 rounded">-</button>
              <span>${item.quantity}</span>
              <button onclick="updateQuantity(${index}, 1)" class="px-2 bg-gray-200 rounded">+</button>
            </div>
          </div>
        </div>
        <div>
          <p class="font-medium">$${(item.price * item.quantity).toFixed(2)}</p>
          <button onclick="removeFromCart(${index})" class="text-red-500 hover:underline mt-1">Remove</button>
        </div>
      </div>
    `;
  });

  document.getElementById("cart-total").textContent = `Total: $${total.toFixed(2)}`;

  window.updateQuantity = function(index, change) {
  if (!cart[index]) return;

  cart[index].quantity += change;

  // Remove item if quantity goes below 1
  if (cart[index].quantity < 1) {
    cart.splice(index, 1);
  }

  // Save and update
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCartItems();
};
}

  renderCartItems();

  // ------------------------
  // Remove from Cart
  // ------------------------
  window.removeFromCart = function(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
  }

}); // DOMContentLoaded

AOS.init();

// Back to top button
const mybutton = document.getElementById("backToTopBtn"); 

window.onscroll = function() {scrollFunction}; 

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", topFunction);

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Promo
//array = ["promo-item", "promo-item"];
const promoItem = document.getElementsByClassName("promo-item");
var countPromo = 0;
setInterval (() => {
    if(countPromo !== 2){
        countPromo ++;
        promoItem[0].classList.remove("active-first");
        promoItem[0].classList.add("remove-promo1");
        promoItem[1].classList.add("active-promo2");
        promoItem[1].classList.remove("remove-promo2");
        
    }
    if(countPromo == 2){
        countPromo = 0;
        promoItem[0].classList.add("active-promo1");
        promoItem[0].classList.remove("remove-promo1");
        promoItem[1].classList.remove("active-promo2");
        promoItem[1].classList.add("remove-promo2");

    }
}, 4000); 

// Trainers Swipper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 400, 
  spaceBetween: 20, 
  direction: 'horizontal',
  slidesPerView: 1,
  loop: false,
  freeMode: true, 

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1024: { slidesPerView: 4},
    768: { slidesPerView: 2},
    480: { slidesPerView: 1},
  },

});

// Toggle user profile menu 
const userProfile = document.getElementById("userProfile"); 
const subMenu = document.getElementById("subMenu");

userProfile.addEventListener("click", toggleMenu, () => {
  subMenu.classList.toggle("open-menu"); 
});