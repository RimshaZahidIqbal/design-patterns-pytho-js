class ChatRoom {
    static showMessage(user, message) {
        const time = new Date().toLocaleString();
        console.log(`[${time}] ${user.getName()}: ${message}`);
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    sendMessage(message) {
        ChatRoom.showMessage(this, message);
    }
}

class MediatorPatternDemo {
    static demo() {
        const john = new User("John");
        const jane = new User("Jane");

        john.sendMessage("Hello, Jane!");
        jane.sendMessage("Hi, John! How are you?");
    }
}


MediatorPatternDemo.demo();

// output

// [10 / 30 / 2024, 12: 39: 23 AM] John: Hello, Jane!
// [10 / 30 / 2024, 12: 39: 23 AM]Jane: Hi, John! How are you ?