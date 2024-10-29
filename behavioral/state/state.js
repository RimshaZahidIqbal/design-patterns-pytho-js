class PhoneState {
    display() { }
    toggleWifi() { }
    toggleLight() { }
}

class LockedState extends PhoneState {
    display() {
        console.log("\nPhone is locked. ");
    }

    toggleWifi() {
        console.log("Toggling Wi-Fi (Locked State)");
    }

    toggleLight() {
        console.log("Toggling light (Locked State)");
    }
}

class UnlockedState extends PhoneState {
    display() {
        console.log("\nPhone is unlocked. ");
    }

    toggleWifi() {
        console.log("Toggling Wi-Fi (Unlocked State)");
    }

    toggleLight() {
        console.log("Toggling light (Unlocked State)");
    }

    openApp(appName) {
        console.log(`Opening ${appName} app.`);
    }
}

class Phone {
    constructor() {
        this.lockedState = new LockedState();
        this.unlockedState = new UnlockedState();
        this.currentState = this.lockedState;
    }

    setState(state) {
        this.currentState = state;
    }

    pressPowerButton() {
        if (this.currentState === this.lockedState) {
            this.setState(this.unlockedState);
            console.log("Phone is now unlocked.");
        } else {
            this.setState(this.lockedState);
            console.log("Phone is now locked.");
        }
        this.display();
    }

    display() {
        this.currentState.display();
    }

    toggleWifi() {
        this.currentState.toggleWifi();
    }

    toggleLight() {
        this.currentState.toggleLight();
    }

    openApp(appName) {
        if (this.currentState === this.unlockedState) {
            this.currentState.openApp(appName);
        } else {
            console.log("Cannot open apps in locked state.");
        }
    }
}

const phone = new Phone();
phone.display();
phone.toggleWifi();
phone.pressPowerButton();
phone.openApp("Camera");
phone.toggleLight();
phone.pressPowerButton();
phone.openApp("Camera");
