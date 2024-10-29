class Visitor {
    visitResidential(residential) { }
    visitBank(bank) { }
    visitCoffeeShop(coffeeShop) { }
}

class Building {
    accept(visitor) { }
}

class Residential extends Building {
    accept(visitor) {
        visitor.visitResidential(this);
    }
}

class Bank extends Building {
    accept(visitor) {
        visitor.visitBank(this);
    }
}

class CoffeeShop extends Building {
    accept(visitor) {
        visitor.visitCoffeeShop(this);
    }
}

class InsuranceAgent extends Visitor {
    visitResidential(residential) {
        console.log("Offering medical insurance to residential building.");
    }

    visitBank(bank) {
        console.log("Offering theft insurance to the bank.");
    }

    visitCoffeeShop(coffeeShop) {
        console.log("Offering fire and flood insurance to the coffee shop.");
    }
}

const main = () => {
    const buildings = [new Residential(), new Bank(), new CoffeeShop()];
    const agent = new InsuranceAgent();

    buildings.forEach(building => {
        building.accept(agent);
    });
};

main();

// output 
// Offering medical insurance to residential building.
// Offering theft insurance to the bank.
// Offering fire and flood insurance to the coffee shop.