// Flyweight class
class Mobile {
    constructor(brand) {
        this.brand = brand;  // Shared data
    }

    display(model, price) {
        console.log(`Brand: ${this.brand}, Model: ${model}, Price: ${price}`);
    }
}

class MobileFactory {
    constructor() {
        this.mobiles = {};  // Cache
    }

    getMobile(brand) {
        if (!this.mobiles[brand]) {
            this.mobiles[brand] = new Mobile(brand);
        }
        return this.mobiles[brand];
    }
}

// Client
const factory = new MobileFactory();

const mobile1 = factory.getMobile("iPhone");
mobile1.display("14 Pro", "$999");

const mobile2 = factory.getMobile("Samsung");
mobile2.display("Galaxy S23", "$849");

const mobile3 = factory.getMobile("iPhone");
mobile3.display("14 Mini", "$799");

console.log(`Same object? ${mobile1.brand} and ${mobile3.brand} ${mobile1 === mobile3}`);
console.log(`Same object? ${mobile1.brand} and ${mobile2.brand} ${mobile1 === mobile2}`);

/* output 
Brand: iPhone, Model: 14 Pro, Price: $999
Brand: Samsung, Model: Galaxy S23, Price: $849
Brand: iPhone, Model: 14 Mini, Price: $799
Same object? iPhone and iPhone true
Same object? iPhone and Samsung false

*/