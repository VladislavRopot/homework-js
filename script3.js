const products = [
    {
        name: 'Product1',
        category: 'Electronics',
        price: 999,
        originCountry: {
            name: 'Moldova',
            code: 'MDA',
        }
    },
    {
        name: 'Product2',
        category: 'Clothing',
        price: 599,
        originCountry: {
            name: 'China',
            code: 'CN',
        }
    },
    {
        name: 'Product3',
        category: 'Electronics',
        price: 399,
        originCountry: {
            name: 'Moldova',
            code: 'MDA',
        }
    }
];

function addProduct(newProduct) {
    products.push(newProduct);
}

addProduct({ name: 'Product4', category: 'Beauty', price: 1199, originCountry: { name: 'United States', code: 'USA' } });

//console.log(products);

function removeProduct(productName) {
    const index = products.findIndex(product => product.name === productName);
    if (index !== -1) {
        products.splice(index, 1);
    }
}

removeProduct('Product2');
//console.log(products);

function filterProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

const filteredElectronics = filterProductsByCategory('Electronics');
//console.log('Produse din categoria "Electronics":');
//console.log(filteredElectronics);

function filterProductsByCountry(countryCode) {
    return products.filter(product => product.originCountry.code === countryCode);
}

const filteredProductsFromMoldova = filterProductsByCountry('MDA');
//console.log('Produse din Moldova:');
//console.log(filteredProductsFromMoldova);

function findMostExpensiveProduct() {
    if (products.length === 0) {
        return null;
    }

    let mostExpensiveProduct = products[0];

    for (const product of products) {
        if (product.price > mostExpensiveProduct.price) {
            mostExpensiveProduct = product;
        }
    }

    return mostExpensiveProduct;
}

const mostExpensive = findMostExpensiveProduct();
if (mostExpensive) {
    //console.log('Cel mai scump produs:');
    //console.log(mostExpensive);
} else {
    //console.log('Nu există produse în listă.');
}

function findCheapestProduct() {
    if (products.length === 0) {
        return null;
    }

    let cheapestProduct = products[0];

    for (const product of products) {
        if (product.price < cheapestProduct.price) {
            cheapestProduct = product;
        }
    }

    return cheapestProduct;
}


const cheapest = findCheapestProduct();
if (cheapest) {
    //console.log('Cel mai ieftin produs:');
    //console.log(cheapest);
} else {
    //console.log('Nu există produse în listă.');
}

function findProductsInPriceRange(minPrice, maxPrice) {
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}

const productsInPriceRange = findProductsInPriceRange(600, 1000);
console.log('Produse cu prețul între 600 și 1000:');
console.log(productsInPriceRange);













