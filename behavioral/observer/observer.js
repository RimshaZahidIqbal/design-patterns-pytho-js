class Subject {
    constructor() {
        this.observers = [];
        this.state = null;
    }

    attach(observer) {
        this.observers.push(observer);
    }

    notify() {
        for (let observer of this.observers) {
            observer.update();
        }
    }

    setState(state) {
        console.log(`Setting state to ${state}`);
        this.state = state;
        this.notify();
    }

    getState() {
        return this.state;
    }
}

class Observer {
    constructor(subject) {
        this.subject = subject;
        this.subject.attach(this);
    }

    update() {
        throw new Error("Observer update method must be implemented by subclasses.");
    }
}

class BinaryObserver extends Observer {
    update() {
        console.log(`Binary String: ${this.subject.getState().toString(2)}`);
    }
}

class OctalObserver extends Observer {
    update() {
        console.log(`Octal String: ${this.subject.getState().toString(8)}`);
    }
}

class HexaObserver extends Observer {
    update() {
        console.log(`Hexadecimal String: ${this.subject.getState().toString(16).toUpperCase()}`);
    }
}

class ObserverPatternDemo {
    static main() {
        const subject = new Subject();
        new BinaryObserver(subject);
        new OctalObserver(subject);
        new HexaObserver(subject);

        console.log("\nSetting state to 10:");
        subject.setState(5);

        console.log("\nSetting state to 15:");
        subject.setState(10);

        console.log("\nSetting state to 15:");
        subject.setState(15);
    }
}

ObserverPatternDemo.main();


// output

/* 

Setting state to 10:
Setting state to 5
Binary String: 101
Octal String: 5
Hexadecimal String: 5

Setting state to 15:
Setting state to 10
Binary String: 1010
Octal String: 12
Hexadecimal String: A

Setting state to 15:
Setting state to 15
Binary String: 1111
Octal String: 17
Hexadecimal String: F

*/