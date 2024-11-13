let cars = [
    { id: 1, brand: "Toyota", model: "Corolla", year: 2020, price: 20000, inStock: true },
    { id: 2, brand: "Honda", model: "Civic", year: 2019, price: 22000, inStock: true },
    { id: 3, brand: "Ford", model: "Mustang", year: 2021, price: 35000, inStock: false }
];


function solve(cars) {
    function getCarsByBrand(brand) {
        let filteredCars = cars.filter(car => car.brand === brand)
        return filteredCars
    }

    function addCar(id, brand, model, year, price, inStock) {
        let newCar = { id, brand, model, year, price, inStock }
        cars.push(newCar)
        return cars
    }

    function getCarById(id) {
        const foundCars = cars.find(car => car.id === id)
        if (foundCars == undefined) {
            return `Car with ID ${id} not found`
        }
        else {
            return foundCars
        }
    }

    function removeCarById(id) {
        const initialLength = cars.length
        cars = cars.filter(car => car.id !== id)
        if (initialLength == cars.length) {
            return `Car with ID ${id} not found`
        }
        else {
            return cars
        }
    }

    function updateCarPrice(id, newPrice) {
        const foundCar = cars.find(car => car.id === id)
        if (foundCar) {
            foundCar.price = newPrice
            return cars
        }
        else {
            return `Car with ID ${id} not found`
        }
    }

    function updateCarStock(id, inStock) {
        const foundCar = cars.find(car => car.id === id)
        if (foundCar) {
            foundCar.inStock = inStock
            return cars
        }
        else {
            return `Car with ID ${id} not found`
        }
    }

    return {
        getCarsByBrand,
        addCar,
        getCarById,
        removeCarById,
        updateCarPrice,
        updateCarStock
    };
}

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
