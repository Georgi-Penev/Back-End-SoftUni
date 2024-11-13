const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, stock: 30 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 800, stock: 50 },
    { id: 3, name: "Headphones", category: "Accessories", price: 150, stock: 100 }
];

function solve(products) {
    function getProductsByCategory(category) {
        let filteredProducts = products.filter(product => product.category === category)
        return filteredProducts
    }
    function addProduct(id, name, category, price, stock) {
        let newProduct = { id: id, name: name, category: category, price: price, stock: stock }
        products.push(newProduct)
        return products
    }
    function getProductById(id) {
        const foundProcuct = products.find(product => product.id === id)
        if (foundProcuct == undefined) {
            return `Product with ID ${id} not found`
        }
        else {
            return foundProcuct
        }
    }
    function removeProductById(id) {
        const initialLength = products.length
        products = products.filter(product => product.id !== id)
        if (initialLength == products.length) {
            return `Product with ID ${id} not found`
        }
        else {
            return products
        }
    }
    function updateProductPrice(id, newPrice) {
        const foundProcuct = products.find(product => product.id === id)
        if (foundProcuct) {
            foundProcuct.price = newPrice
            return products
        }
        else {
            return `Product with ID ${id} not found`
        }
    }
    function updateProductStock(id, newStock) {
        const foundProcuct = products.find(product => product.id === id)
        if (foundProcuct) {
            foundProcuct.stock = newStock
            return products
        }
        else {
            return `Product with ID ${id} not found`
        }
    }
    return {
        getProductsByCategory,
        addProduct,
        getProductById,
        removeProductById,
        updateProductPrice,
        updateProductStock
    }
}

const store = solve(products)
const output = store.updateProductStock(2, 2000);
console.log(output)