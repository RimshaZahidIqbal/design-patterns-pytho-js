class Vehicle {
    constructor(model, color, features) {
        this.model = model;
        this.color = color;
        this.features = features;
    }

    async clone() {
        await this._simulateAsyncTask();
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    async _simulateAsyncTask() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Fetching additional data for vehicle ${this.model}...`);
                resolve();
            }, 1000);  
        });
    }
}

(async () => {
    const prototypeVehicle = new Vehicle("SUV", "White", ["GPS", "Sunroof"]);
    const rentalCar1 = await prototypeVehicle.clone();
    rentalCar1.model = "SUV - Economy";

    const rentalCar2 = await prototypeVehicle.clone();
    rentalCar2.color = "Black";
    rentalCar2.features.push("Leather Seats");

    console.log(prototypeVehicle);
    console.log(rentalCar1);
    console.log(rentalCar2);
})();
