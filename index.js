const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.static('static'));
app.use(cors());

let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

// Get the products sorted by popularity
function sortedProducts(prod1, prod2) {
  return prod2.rating - prod1.rating;
}
app.get('/products/sort/popularity', (req, res) => {
  products.sort(sortedProducts);
  res.json({products:products});
});

// Get the products sorted by “high-to-low” price
function sortedProductsByPriceDesc(prod1, prod2) {
  return prod2.price - prod1.price;
}
app.get('/products/sort/price-high-to-low', (req, res) => {
  products.sort(sortedProductsByPriceDesc);
  res.json({products: products});
});

// Get the products sorted by “low-to-high” price
function sortedProductsByPriceAsc(prod1, prod2) {
  return prod1.price - prod2.price;
}
app.get('/products/sort/price-low-to-high', (req, res) => {
  products.sort(sortedProductsByPriceAsc);
  res.json({products:products});
});

// Filter the products based on the “RAM” option.
function ramBasedFiltering(product, ram) {
  return product.ram === ram;
}
app.get('/products/filter/ram', (req, res) => {
  let ram = parseFloat(req.query.ram);
  let ramFilter = products.filter((product) =>
    ramBasedFiltering(product, ram)
  );
  res.json({products : ramFilter});
});

// Filter the products based on the “rom” option.
function romBasedFiltering(product, rom) {
  return product.rom === rom;
}
app.get('/products/filter/rom', (req, res) => {
  let rom = parseFloat(req.query.rom);
  let romFilter = products.filter((product) =>
    romBasedFiltering(product, rom)
  );
  res.json({products: romFilter});
});

// Filter the products based on the “brand” option.
function brandBasedFiltering(product, brand) {
  return product.brand.toLowerCase() === brand.toLowerCase();
}
app.get('/products/filter/brand', (req, res) => {
  let brand = req.query.brand;
  let brandFilter = products.filter((product) =>
    brandBasedFiltering(product, brand)
  );
  res.json({products: brandFilter});
});

// Filter the products based on the “os” option.
function osBasedFiltering(product, os) {
  return product.os.toLowerCase() === os.toLowerCase();
}
app.get('/products/filter/os', (req, res) => {
  let os = req.query.os;
  let osFilter = products.filter((product) => osBasedFiltering(product, os));
  res.json({products: osFilter});
});

// Filter the products based on the “price” option.
function priceBasedFiltering(product, price) {
  return product.price <= price;
}
app.get('/products/filter/price/:price', (req, res) => {
  let price = parseFloat(req.query.price);
  let priceFilter = products.filter((product) =>
    priceBasedFiltering(product, price)
  );
  res.json({products: priceFilter});
});

// send origianl array of products
app.get('/products', (req, res) => {
  res.json({products: products});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
