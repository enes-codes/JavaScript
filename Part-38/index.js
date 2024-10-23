
    const salesTax = 0.05;
    
    class Product{
        constructor(name, price){
            this.name = name;
            this.price = price;
        }

        displayProduct(){
            console.log(`Product: ${this.name} - Price: ${this.price.toFixed(2)}`);
        }

        calculateTotal(salesTax){
            return this.price + (this.price * salesTax);
        }
    }

    const product1 = new Product("Shirt",19.99);
    product1.displayProduct();

    const product2 = new Product("Pants",29.99);
    product2.displayProduct();

    const total1 = product1.calculateTotal(salesTax);
    console.log(`Total: ${total1.toFixed(2)}`);

    const total2 = product2.calculateTotal(salesTax);
    console.log(`Total: ${total2.toFixed(2)}`);