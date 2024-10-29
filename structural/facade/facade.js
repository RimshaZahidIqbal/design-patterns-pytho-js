// Facade Design Pattern in JavaScript

//  Interface
class MobileShop {
    modelNo() { }
    price() { }
}

class Iphone extends MobileShop {
    modelNo() {
        return "iPhone 14";
    }

    price() {
        return "$999";
    }
}

class Samsung extends MobileShop {
    modelNo() {
        return "Samsung Galaxy S23";
    }

    price() {
        return "$849";
    }
}

class Blackberry extends MobileShop {
    modelNo() {
        return "Blackberry Classic";
    }

    price() {
        return "$399";
    }
}

class ShopKeeper {
    constructor() {
        this.iphone = new Iphone();
        this.samsung = new Samsung();
        this.blackberry = new Blackberry();
    }

    iphoneSale() {
        console.log("Model: " + this.iphone.modelNo());
        console.log("Price: " + this.iphone.price());
    }

    samsungSale() {
        console.log("Model: " + this.samsung.modelNo());
        console.log("Price: " + this.samsung.price());
    }

    blackberrySale() {
        console.log("Model: " + this.blackberry.modelNo());
        console.log("Price: " + this.blackberry.price());
    }
}

// Client
const shopKeeper = new ShopKeeper();
console.log("Iphone sale:");
shopKeeper.iphoneSale();

console.log("\nSamsung sale:");
shopKeeper.samsungSale();

console.log("\nBlackberry sale:");
shopKeeper.blackberrySale();
/*
Iphone sale:
Model: iPhone 14
Price: $999

Samsung sale:
Model: Samsung Galaxy S23
Price: $849

Blackberry sale:
Model: Blackberry Classic
Price: $399
*/