// Interface
class Image {
    display() {
        throw new Error("This method must be overridden!");
    }
}

// RealImage class
class RealImage extends Image {
    constructor(filename) {
        super();
        this.filename = filename;
        this.image = null;
        this.loadImageFromDisk();
    }

    loadImageFromDisk() {
        // delay in loading the image
        console.log(`Loading ${this.filename} from disk...`);
        this.image = new Image();
    }

    display() {
        // Show the image
        if (this.image) {
            console.log(`Displaying ${this.filename}\n`);
            
        } else {
            console.log(`Image ${this.filename} is not loaded\n`);
        }
    }
}

// ProxyImage 
class ProxyImage extends Image {
    constructor(filename) {
        super();
        this.filename = filename;
        this.realImage = null; 
    }

    display() {
        // Lazy load
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

const main = () => {

    const image1 = new ProxyImage("image1.png");
    const image2 = new ProxyImage("image2.png");

    // First display
    image1.display();

    // Second display
    image1.display();

    // Another image
    image2.display();
};

main();
