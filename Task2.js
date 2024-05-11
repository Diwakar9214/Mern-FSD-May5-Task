class Circle {
    // Constructor
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    // Getters and Setters
    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    // Other methods
    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

    toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
}

// Test
const myCircle = new Circle();
console.log(myCircle.toString()); // Circle[radius=1, color=red]

myCircle.setRadius(2.5);
myCircle.setColor("blue");
console.log(myCircle.toString()); // Circle[radius=2.5, color=blue]

console.log("Area:", myCircle.getArea()); // Area: 19.634954084936208
console.log("Circumference:", myCircle.getCircumference()); // Circumference: 15.707963267948966