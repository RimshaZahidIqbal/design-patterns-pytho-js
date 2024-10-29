class Memento {
    constructor(state) {
        this._state = state;
    }

    async getState() {
        return this._state;
    }
}

class Originator {
    constructor() {
        this._state = null;
    }

    async setState(state) {
        console.log(`Setting state to ${state}`);
        this._state = state;
    }

    async getState() {
        return this._state;
    }

    async saveStateToMemento() {
        console.log(`Saving state to Memento: ${this._state}`);
        return new Memento(this._state);
    }

    async restoreStateFromMemento(memento) {
        this._state = await memento.getState();
        console.log(`Restoring state from Memento: ${this._state}`);
    }
}

class CareTaker {
    constructor() {
        this._mementoList = [];
    }

    async addMemento(memento) {
        this._mementoList.push(memento);
    }

    async getMemento(index) {
        return this._mementoList[index];
    }
}

class MementoPatternDemo {
    static async demo() {
        const originator = new Originator();
        const careTaker = new CareTaker();

        await originator.setState("Do some task (1)");
        await careTaker.addMemento(await originator.saveStateToMemento());

        await originator.setState("Do some task (2)");
        await careTaker.addMemento(await originator.saveStateToMemento());

        await originator.setState("Do some task (3)");
        console.log("Current State: " + await originator.getState());

        // Restore states
        await originator.restoreStateFromMemento(await careTaker.getMemento(0));
        await originator.restoreStateFromMemento(await careTaker.getMemento(1));
    }
}

(async () => {
    await MementoPatternDemo.demo();
})();


/*

Setting state to Do some task (1)
Saving state to Memento: Do some task (1)
Setting state to Do some task (2)
Saving state to Memento: Do some task (2)
Setting state to Do some task (3)
Current State: Do some task (3)
Restoring state from Memento: Do some task (1)
Restoring state from Memento: Do some task (2)

*/