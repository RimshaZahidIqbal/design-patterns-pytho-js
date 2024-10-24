//this is abstract class
class Card {
    async create() {
        throw new Error("This method should be overridden");
    }
}
// this is Concrete class 
class GoldCard extends Card {
    async create() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("Gold Card created"), 1000);
        });
    }
}

// this is Concrete class 
class SilverCard extends Card {
    async create() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("Silver Card created"), 1000);
        });
    }
}

// this is Concrete class 
class BronzeCard extends Card {
    async create() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("Bronze Card created"), 1000);
        });
    }
}

class CardFactory {
    static async getCard(cardType) {
        switch (cardType) {
            case 'gold':
                return await new GoldCard().create();
            case 'silver':
                return await new SilverCard().create();
            case 'bronze':
                return await new BronzeCard().create();
            default:
                throw new Error("Unknown card type");
        }
    }
}


(async () => {
    const card1 = await CardFactory.getCard('gold');
    console.log(card1);

})();
