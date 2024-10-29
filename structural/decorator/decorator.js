// Component
class Food {
    prepareFood() {
        throw new Error("Method 'prepareFood()' must be implemented.");
    }

    foodPrice() {
        throw new Error("Method 'foodPrice()' must be implemented.");
    }
}

// ConcreteComponent
class VegFood extends Food {
    prepareFood() {
        return "Veg Food";
    }

    foodPrice() {
        return 10.0;
    }
}

// ConcreteComponent
class NonVegFood extends Food {
    prepareFood() {
        return "Non-Veg Food";
    }

    foodPrice() {
        return 15.0;
    }
}

// Decorator
class FoodDecorator extends Food {
    constructor(newFood) {
        super();
        this.newFood = newFood;
    }

    prepareFood() {
        return this.newFood.prepareFood();
    }

    foodPrice() {
        return this.newFood.foodPrice();
    }
}

// ConcreteDecorator
class ChineseFood extends FoodDecorator {
    prepareFood() {
        return this.newFood.prepareFood() + ", with Chinese seasoning";
    }

    foodPrice() {
        return this.newFood.foodPrice() + 5.0;
    }
}

// Client
(async () => {
    const vegFood = new VegFood();
    console.log(`${vegFood.prepareFood()} costs ${vegFood.foodPrice()}`);

    //  VegFood + ChineseFood
    const chineseVegFood = new ChineseFood(vegFood);
    console.log(`${chineseVegFood.prepareFood()} costs ${chineseVegFood.foodPrice()}`);

    const nonVegFood = new NonVegFood();
    console.log(`${nonVegFood.prepareFood()} costs ${nonVegFood.foodPrice()}`);

    //  NonVegFood + ChineseFood
    const chineseNonVegFood = new ChineseFood(nonVegFood);
    console.log(`${chineseNonVegFood.prepareFood()} costs ${chineseNonVegFood.foodPrice()}`);
})();


/*  Output
Veg Food costs 10
Veg Food, with Chinese seasoning costs 15
Non-Veg Food costs 15
Non-Veg Food, with Chinese seasoning costs 20*/