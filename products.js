const sidenavOpen = document.getElementById('sidenavOpen'); 
const sidenavClose = document.getElementById('sidenavClose');
const sidenav = document.getElementById('sidenav');

// Side navigation
sidenavOpen.style.display = 'block';
sidenavClose.style.display = 'none'; 

function showSidenav(){
  const sidenav = document.querySelector('.sidenav')
   sidenavOpen.style.display = 'none'; 
   sidenavClose.style.display = 'block';
  sidenav.style.display = 'flex' 
}

function hideSidenav(){
  const sidenav = document.querySelector('.sidenav')
   sidenavOpen.style.display = 'block'; 
  sidenavClose.style.display = 'none';
  sidenav.style.display = 'none' 
} 

const products = [
    {
        id: 1, 
        name: "L/S Harlin Shirt",
        brand: "Carhartt WIP",
        price: 90.00,
        image: "carhartt/I035954_3I3_XX-ST-01.avif",
        // sizes: ["S", "M", "L", "XL", "XXL"],
        description: "The L/S Harlin Shirt by Carhartt WIP is a classic long-sleeve shirt made from durable cotton fabric. It features a button-down front, a chest pocket, and a relaxed fit for comfort. Perfect for casual wear or layering in cooler weather."
    },

    {
        id: 2,
        name: "Clover Sweatshirt",
        brand: "Carhartt WIP",
        price: 90.00,
        image: "carhartt/I036038_482_XX-ST-01.avif",
        // sizes: ["S", "M", "L", "XL", "XXL"],
        description: "The Clover Sweatshirt by Carhartt WIP is a cozy and stylish sweatshirt made from soft fleece material. It features a crew neckline, ribbed cuffs and hem, and the iconic Carhartt logo embroidered on the chest. Ideal for casual outings or lounging at home."
    },

    {
      id: 3, 
      name: "Aden Chore Coat",
      brand: "Carhartt WIP",
      price: 145.00,
      image: "carhartt/I036256_01_01-ST-01.avif",
      // sizes: ["S", "M", "L", "XL", "XXL"],
      description: "The Aden Chore Coat by Carhartt WIP is a rugged and functional coat designed for workwear enthusiasts. Made from heavyweight cotton canvas, it features multiple pockets for storage, a button-front closure, and a relaxed fit for ease of movement. Perfect for outdoor activities or casual wear."
    },

    {
      id: 4,
      name: "Half Zip American Script Sweatshirt",
      brand: "Carhartt WIP",
      price: 85.00,
      image: "carhartt/I027014_3IX_XX-ST-01.avif",
      // sizes: ["S", "M", "L", "XL", "XXL"],
      description: "The Half Zip American Script Sweatshirt by Carhartt WIP is a stylish and comfortable sweatshirt featuring a half-zip design and the iconic American Script logo embroidered on the chest. Made from soft fleece material, it offers warmth and a relaxed fit for everyday wear."
    }, 

    {
      id: 5,
      name: "S/S Pocket T-Shirt",
      brand: "Carhartt WIP",
      price: 30.00,
      image: "carhartt/I030434_3IR_XX-ST-01.avif",
      // sizes: ["S", "M", "L", "XL", "XXL"],
      description: "The S/S Pocket T-Shirt by Carhartt WIP is a classic short-sleeve t-shirt made from soft cotton fabric. It features a chest pocket with the Carhartt logo tag, a crew neckline, and a relaxed fit for everyday comfort. Perfect for casual wear or layering."
    }, 

    {
      id: 6,
      name: "S/S Ezra Pocket T-Shirt",
      brand: "Carhartt WIP",
      price: 40.00,
      image: "carhartt/I036179_3KV_XX-ST-01.avif",
      // sizes: ["S", "M", "L", "XL", "XXL"],
      description: "The S/S Ezra Pocket T-Shirt by Carhartt WIP is a classic short-sleeve t-shirt made from soft cotton fabric. It features a chest pocket with the Carhartt logo tag, a crew neckline, and a relaxed fit for everyday comfort. Perfect for casual wear or layering."
    } 
]; 

// Product Details Page Script 
document.addEventListener("DOMContentLoaded", () => {
    const productNameEl = document.getElementById("product-name");

    if (!productNameEl) return; // Not product page, skip

    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));
    const product = products.find(p => p.id === productId);

    if (!product) {
        document.body.innerHTML = "Product not found";
        return;
    }

    document.title = `SimpleFit | ${product.name} | Offical Online Store`; 

    productNameEl.textContent = product.name;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-price").textContent = `$${product.price}`;
    document.getElementById("product-brand").textContent = product.brand;
    document.getElementById("product-description").textContent = product.description;

    product.sizes.forEach(size => {
        document.getElementById("sizes").innerHTML += `<button>${size}</button>`;
    });
});
