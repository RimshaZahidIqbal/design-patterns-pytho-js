class GameAI {
    takeTurn() {
        this.collectResources();
        this.buildStructures();
        this.buildUnits();
        this.attack();
    }

    collectResources() { }

    buildStructures() { }

    buildUnits() { }

    attack() {
        this.sendScouts("scout position");
        this.sendWarriors("warrior position");
    }

    sendScouts(position) {
        throw new Error("This method must be implemented by subclasses.");
    }

    sendWarriors(position) {
        throw new Error("This method must be implemented by subclasses.");
    }
}

class OrcsAI extends GameAI {
    collectResources() {
        console.log("Orcs are collecting resources.");
    }

    buildStructures() {
        console.log("Orcs are building structures.");
    }

    buildUnits() {
        console.log("Orcs are building units.");
    }

    sendScouts(position) {
        console.log(`Orcs are sending scouts to ${position}.`);
    }

    sendWarriors(position) {
        console.log(`Orcs are sending warriors to ${position}.`);
    }
}

class MonstersAI extends GameAI {
    collectResources() {
        console.log("Monsters are collecting resources.");
    }

    buildStructures() {
        console.log("Monsters are building structures.");
    }

    buildUnits() {
        console.log("Monsters are building units.");
    }

    sendScouts(position) {
        console.log(`Monsters are sending scouts to ${position}.`);
    }

    sendWarriors(position) {
        console.log(`Monsters are sending warriors to ${position}.`);
    }
}

const orcsAI = new OrcsAI();
orcsAI.takeTurn();

const monstersAI = new MonstersAI();
monstersAI.takeTurn();
