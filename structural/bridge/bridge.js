// Implementor
class Device {
    isEnabled() {
        throw new Error("Method 'isEnabled()' must be implemented.");
    }

    enable() {
        throw new Error("Method 'enable()' must be implemented.");
    }

    disable() {
        throw new Error("Method 'disable()' must be implemented.");
    }

    getVolume() {
        throw new Error("Method 'getVolume()' must be implemented.");
    }

    setVolume(volume) {
        throw new Error("Method 'setVolume()' must be implemented.");
    }

    getChannel() {
        throw new Error("Method 'getChannel()' must be implemented.");
    }

    setChannel(channel) {
        throw new Error("Method 'setChannel()' must be implemented.");
    }
}

// Concrete Implementors
class TV extends Device {
    constructor() {
        super();
        this.enabled = false;
        this.volume = 0;
        this.channel = 1;
    }

    isEnabled() {
        return this.enabled;
    }

    enable() {
        this.enabled = true;
    }

    disable() {
        this.enabled = false;
    }

    getVolume() {
        return this.volume;
    }

    setVolume(volume) {
        this.volume = volume;
    }

    getChannel() {
        return this.channel;
    }

    setChannel(channel) {
        this.channel = channel;
    }
}

class Radio extends Device {
    constructor() {
        super();
        this.enabled = false;
        this.volume = 0;
        this.station = 1;
    }

    isEnabled() {
        return this.enabled;
    }

    enable() {
        this.enabled = true;
    }

    disable() {
        this.enabled = false;
    }

    getVolume() {
        return this.volume;
    }

    setVolume(volume) {
        this.volume = volume;
    }

    getChannel() {
        return this.station;
    }

    setChannel(station) {
        this.station = station;
    }
}

// Abstraction
class Remote {
    constructor(device) {
        this.device = device;
    }

    togglePower() {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            this.device.enable();
        }
    }

    volumeDown() {
        this.device.setVolume(this.device.getVolume() - 1);
    }

    volumeUp() {
        this.device.setVolume(this.device.getVolume() + 1);
    }

    channelDown() {
        this.device.setChannel(this.device.getChannel() - 1);
    }

    channelUp() {
        this.device.setChannel(this.device.getChannel() + 1);
    }
}

const tv = new TV();
const remoteForTV = new Remote(tv);
remoteForTV.togglePower();
remoteForTV.volumeUp();
remoteForTV.channelUp();

console.log(`TV enabled: ${tv.isEnabled()}, Volume: ${tv.getVolume()}, Channel: ${tv.getChannel()}`);

const radio = new Radio();
const remoteForRadio = new Remote(radio);
remoteForRadio.togglePower();
remoteForRadio.volumeUp();
remoteForRadio.channelUp();

console.log(`Radio enabled: ${radio.isEnabled()}, Volume: ${radio.getVolume()}, Station: ${radio.getChannel()}`);


/*    Output
  
TV enabled: true, Volume: 1, Channel: 2
Radio enabled: true, Volume: 1, Station: 2

*/