// Component
class Graphic {
    draw() {
        throw new Error("Method 'draw()' must be implemented.");
    }
}

// Leaf
class Circle extends Graphic {
    draw() {
        console.log("Drawing a Circle");
    }
}

// Leaf
class Rectangle extends Graphic {
    draw() {
        console.log("Drawing a Rectangle");
    }
}

// Composite
class CompositeGraphic extends Graphic {
    constructor() {
        super();
        this.graphics = [];
    }

    add(graphic) {
        this.graphics.push(graphic);
    }

    remove(graphic) {
        const index = this.graphics.indexOf(graphic);
        if (index > -1) {
            this.graphics.splice(index, 1);
        }
    }

    async draw() {
        for (const graphic of this.graphics) {
            await graphic.draw(); 
        }
    }
}

// Client
(async () => {
    const circle1 = new Circle();
    const circle2 = new Circle();
    const rectangle1 = new Rectangle();

    const compositeGraphic = new CompositeGraphic();
    compositeGraphic.add(circle1);
    compositeGraphic.add(circle2);
    compositeGraphic.add(rectangle1);

    console.log("Drawing Composite Graphic:");
    await compositeGraphic.draw();
})();

/* output:
Drawing Composite Graphic:
Drawing a Circle
Drawing a Circle
Drawing a Rectangle
 */