  // Product Data 
  const products = [
    {
        id: 1, 
        name: "L/S Harlin Shirt",
        brand: "Carhartt WIP",
        price: 90.00,
        image: "carhartt/I035954_3I3_XX-ST-01.avif",
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "The L/S Harlin Shirt by Carhartt WIP is a classic long-sleeve shirt made from durable cotton fabric. It features a button-down front, a chest pocket, and a relaxed fit for comfort. Perfect for casual wear or layering in cooler weather."
    },

    {
        id: 2,
        name: "Clover Sweatshirt",
        brand: "Carhartt WIP",
        price: 90.00,
        image: "carhartt/I036038_482_XX-ST-01.avif",
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "The Clover Sweatshirt by Carhartt WIP is a cozy and stylish sweatshirt made from soft fleece material. It features a crew neckline, ribbed cuffs and hem, and the iconic Carhartt logo embroidered on the chest. Ideal for casual outings or lounging at home."
    },

    {
      id: 3, 
      name: "Aden Chore Coat",
      brand: "Carhartt WIP",
      price: 145.00,
      image: "carhartt/I036256_01_01-ST-01.avif",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "The Aden Chore Coat by Carhartt WIP is a rugged and functional coat designed for workwear enthusiasts. Made from heavyweight cotton canvas, it features multiple pockets for storage, a button-front closure, and a relaxed fit for ease of movement. Perfect for outdoor activities or casual wear."
    },

    {
      id: 4,
      name: "Half Zip American Script Sweatshirt",
      brand: "Carhartt WIP",
      price: 85.00,
      image: "carhartt/I027014_3IX_XX-ST-01.avif",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "The Half Zip American Script Sweatshirt by Carhartt WIP is a stylish and comfortable sweatshirt featuring a half-zip design and the iconic American Script logo embroidered on the chest. Made from soft fleece material, it offers warmth and a relaxed fit for everyday wear."
    }, 

    {
      id: 5,
      name: "S/S Pocket T-Shirt",
      brand: "Carhartt WIP",
      price: 30.00,
      image: "carhartt/I030434_3IR_XX-ST-01.avif",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "The S/S Pocket T-Shirt by Carhartt WIP is a classic short-sleeve t-shirt made from soft cotton fabric. It features a chest pocket with the Carhartt logo tag, a crew neckline, and a relaxed fit for everyday comfort. Perfect for casual wear or layering."
    }, 

    {
      id: 6,
      name: "S/S Ezra Pocket T-Shirt",
      brand: "Carhartt WIP",
      price: 40.00,
      image: "carhartt/I036179_3KV_XX-ST-01.avif",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "The S/S Ezra Pocket T-Shirt by Carhartt WIP is a classic short-sleeve t-shirt made from soft cotton fabric. It features a chest pocket with the Carhartt logo tag, a crew neckline, and a relaxed fit for everyday comfort. Perfect for casual wear or layering."
    },  

    {
      id: 7,
      name: "Flint Pant", 
      brand: "Carhartt WIP",
      price: 35.00,
      image: "discoverImages/I029919_3GD_GD-ST-01.avif",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "The Flint Pant by Carhartt WIP is a durable and versatile pair of pants made from heavyweight cotton canvas. It features a relaxed fit, multiple pockets for storage, and reinforced knees for added durability. Ideal for workwear or casual wear."
    }, 

    {
      id: 8, 
      name: "L/S Harlin Shirt - Chili Pepper",
      brand: "Carhartt WIP",
      price: 30.00,
      image: "discoverImages/I035954_3I2_XX-ST-01.avif",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "The L/S Harlin Shirt by Carhartt WIP is a classic long-sleeve shirt made from durable cotton fabric. It features a button-down front, a chest pocket, and a relaxed fit for comfort. Perfect for casual wear or layering in cooler weather."
    },

    {
      id: 9, 
      name: "Adair Coat",
      brand: "Carhartt WIP",
      price: 38.50,
      image: "discoverImages/I035969_00E_XX-ST-01.avif",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "The Adair Coat by Carhartt WIP is a stylish and functional coat designed for everyday wear. Made from durable cotton canvas, it features a button-front closure, multiple pockets for storage, and a relaxed fit for comfort. Perfect for layering in cooler weather."
    },

     {
      id: 10,
      name: "Kylan Liner Jacket",
      brand: "Carhartt WIP",
      price: 49.00,
      image: "discoverImages/I035970_3GD_XX-ST-01.avif",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "The Kylan Liner Jacket by Carhartt WIP is a lightweight and versatile jacket designed for layering. Made from durable nylon fabric, it features a zip-front closure, ribbed cuffs and hem, and the iconic Carhartt logo embroidered on the chest. Ideal for transitional weather or casual wear."
    },

     {
      id: 11,
      name: "Shepton Jacket",
      brand: "Carhartt WIP",
      price: 9.00,
      image: "discoverImages/I035974_1LM_XX-ST-01.avif",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "The Shepton Jacket by Carhartt WIP is a durable and functional jacket designed for workwear enthusiasts. Made from heavyweight cotton canvas, it features a button-front closure, multiple pockets for storage, and a relaxed fit for ease of movement. Perfect for outdoor activities or casual wear."
    },

     {
      id: 12,
      name: "Hooded Alda Sweatshirt",
      brand: "Carhartt WIP",
      price: 49.00,
      image: "discoverImages/I036055_1M5_XX-ST-01.avif",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "The Hooded Alda Sweatshirt by Carhartt WIP is a cozy and stylish hoodie made from soft fleece material. It features a drawstring hood, a kangaroo pocket, and the iconic Carhartt logo embroidered on the chest. Ideal for casual outings or lounging at home."
    },

     {
      id: 13,
      name: "Cleveland Jacket",
      brand: "Carhartt WIP",
      price: 39.00,
      image: "discoverImages/I036258_01_06-ST-01.avif",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "The Cleveland Jacket by Carhartt WIP is a rugged and functional jacket designed for workwear enthusiasts. Made from heavyweight cotton canvas, it features a button-front closure, multiple pockets for storage, and a relaxed fit for ease of movement. Perfect for outdoor activities or casual wear."
    },

     {
      id: 14,
      name: "OG Single Knee Short",
      brand: "Carhartt WIP",
      price: 15.00,
      image: "discoverImages/I036308_HZ_01-ST-01.avif",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "The OG Single Knee Short by Carhartt WIP is a durable and versatile pair of shorts made from heavyweight cotton canvas. It features a relaxed fit, multiple pockets for storage, and reinforced knees for added durability. Ideal for workwear or casual wear."
    },

     {
      id: 15,
      name: "Asics Gel-Venture 6 Trainers in olive canvas",
      brand: "Asics",
      price: 95.00,
      image: "shoesImages/208875953-1-khaki.avif",
      sizes: [6, 7, 8, 9, 10, 11, 12],
      description: "The Asics Gel-Venture 6 Trainers in olive canvas are designed for trail running and outdoor activities. They feature a durable canvas upper in olive green, GEL cushioning technology for shock absorption, and a rugged outsole for enhanced traction on various terrains. Perfect for those who enjoy off-road adventures."
    },

     {
      id: 16,
      name: "Nike Air Max 90 Drift Trainers in dark grey and khaki",
      brand: "Nike",
      price: 120.00,
      image: "shoesImages/208579450-1-grey.avif",
      sizes: [6, 7, 8, 9, 10, 11, 12],
      description: "The Nike Air Max 90 Drift Trainers in dark grey and khaki offer a modern twist on the classic Air Max 90 silhouette. Featuring a combination of dark grey and khaki tones, these trainers provide a stylish look while delivering comfort with their visible Air cushioning and durable construction. Ideal for everyday wear and casual outings."
    },

     {
      id: 17,
      name: "Adidas Originals Italia trainers in brown and white",
      brand: "Adidas",
      price: 100.00,
      image: "shoesImages/208604969-1-brown.avif",
      sizes: [6, 7, 8, 9, 10, 11, 12],
      description: "The Adidas Originals Italia trainers in brown and white are a retro-inspired footwear option that combines classic style with modern comfort. Featuring a brown upper with white accents, these trainers showcase the iconic Adidas three stripes and logo. They are designed for everyday wear, providing a comfortable fit and timeless look."
    },

     {
      id: 18,
      name: "New Balance 1906 unisex toggle trainers in grey and black",
      brand: "New Balance",
      price: 150.00,
      image: "shoesImages/208876058-1-black.avif",
      sizes: [6, 7, 8, 9, 10, 11, 12],
      description: "The New Balance 1906 unisex toggle trainers in grey and black offer a comfortable and stylish option for everyday wear. Featuring a grey and black color scheme, these trainers are designed with a toggle closure for easy adjustment and a secure fit. Ideal for casual outings and light activities."
    },

     {
      id: 19,
      name: "Asics Gel-Kinetic Fluent trainers in black and pure silver",
      brand: "Asics",
      price: 180.00,
      image: "shoesImages/208799097-1-lightgreen.avif",
      sizes: [6, 7, 8, 9, 10, 11, 12],
      description: "The Asics Gel-Kinetic Fluent trainers in black and pure silver are designed for runners seeking a blend of performance and style. Featuring a sleek black upper with pure silver accents, these trainers incorporate GEL cushioning technology for superior shock absorption and a responsive ride. Perfect for both training sessions and casual wear."
    },

     {
      id: 20,
      name: "Salomon XT-Whisper trainers in sharp green and iron",
      brand: "Salomon",
      price: 140.00,
      image: "shoesImages/208140130-1-black.avif",
      sizes: [6, 7, 8, 9, 10, 11, 12],
      description: "The Salomon XT-Whisper trainers in sharp green and iron are designed for trail running and outdoor adventures. Featuring a vibrant sharp green upper with iron accents, these trainers offer excellent grip, stability, and comfort on various terrains. Ideal for those who enjoy exploring the outdoors."
    },

     {
      id: 21,
      name: "New Balance M1000 unisex trainers in",
      brand: "New Balance",
      price: 150.00,
      image: "shoesImages/208876017-1-white.avif",
      sizes: [6, 7, 8, 9, 10, 11, 12],
      description: "The New Balance M1000 unisex trainers in white offer a classic and versatile design suitable for everyday wear. Featuring a clean white upper with subtle branding, these trainers provide comfort and support with their cushioned midsole and durable outsole. Ideal for those seeking a timeless sneaker style."
    }
];  