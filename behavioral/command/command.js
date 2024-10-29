// Command Interface
class Command {
    execute() {
        throw new Error("This method must be overridden!");
    }
}

// Device Interface
class Device {
    on() { }
    off() { }
    up() { }
    down() { }
}

// Concrete Device: Light
class Light extends Device {
    on() {
        console.log("Light: ON");
    }

    off() {
        console.log("Light: OFF");
    }

    up() {
        console.log("Light: Brightness Increased");
    }

    down() {
        console.log("Light: Brightness Decreased");
    }
}

// Concrete Device: Speaker
class Speaker extends Device {
    on() {
        console.log("Speaker: ON");
    }

    off() {
        console.log("Speaker: OFF");
    }

    up() {
        console.log("Speaker: Volume Increased");
    }

    down() {
        console.log("Speaker: Volume Decreased");
    }
}

// Concrete Commands
class OnCommand extends Command {
    constructor(device) {
        super();
        this.device = device;
    }

    execute() {
        this.device.on();
    }
}

class OffCommand extends Command {
    constructor(device) {
        super();
        this.device = device;
    }

    execute() {
        this.device.off();
    }
}

class UpCommand extends Command {
    constructor(device) {
        super();
        this.device = device;
    }

    execute() {
        this.device.up();
    }
}

class DownCommand extends Command {
    constructor(device) {
        super();
        this.device = device;
    }

    execute() {
        this.device.down();
    }
}

// Invoker
class RemoteApplication {
    clickOn(command) {
        command.execute();
    }

    clickOff(command) {
        command.execute();
    }

    clickUp(command) {
        command.execute();
    }

    clickDown(command) {
        command.execute();
    }
}

// Client Code
const main = () => {
    // Create devices
    const light = new Light();
    const speaker = new Speaker();

    // Create commands for devices
    const lightOn = new OnCommand(light);
    const lightOff = new OffCommand(light);
    const speakerOn = new OnCommand(speaker);
    const speakerOff = new OffCommand(speaker);

    const lightUp = new UpCommand(light);
    const lightDown = new DownCommand(light);
    const speakerUp = new UpCommand(speaker);
    const speakerDown = new DownCommand(speaker);

    // Create remote application
    const remote = new RemoteApplication();

    // Simulate button clicks
    remote.clickOn(lightOn);       // Light: ON
    remote.clickOff(lightOff);     // Light: OFF
    remote.clickOn(speakerOn);     // Speaker: ON
    remote.clickUp(speakerUp);     // Speaker: Volume Increased
    remote.clickDown(speakerDown);  // Speaker: Volume Decreased
    remote.clickOff(speakerOff);    // Speaker: OFF
};

// Run
main();

/* Light: ON
Light: OFF
Speaker: ON
Speaker: Volume Increased
Speaker: Volume Decreased
Speaker: OFF*/