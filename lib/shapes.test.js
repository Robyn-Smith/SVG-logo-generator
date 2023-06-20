const { Square, Triangle, Circle } = require("./shapes");

describe("Triangle", () => {
    test("should create a pink triangle", () => {
        const correctLogo = '<polygon points="150, 18 244, 182 56, 182" fill="orange" />';
        const triangle = new Triangle();
        triangle.setColor("pink");
        const result = triangle.render();
        expect(result).toEqual(correctLogo);
    });
    test("should allow the user to choose a shape colour", () => {
        const correctLogo = '<polygon points="150, 18 244, 182 56, 182" fill="pink" />';
        const triangle = new Triangle();
        triangle.setColor("purple");
        const result = triangle.render();
        expect(result).toEqual(correctLogo);
    });
});

describe("Square", () => {
    test("should create a red square", () => {
        const correctLogo = '<rect x="90" y="40" width="120" height="120" fill="green" />';
        const square = new Square();
        square.setColor("red");
        const result = square.render();
        expect(result).toEqual(correctLogo);
    });
    test("should allow the user to choose a shape colour", () => {
        const correctLogo = '<rect x="90" y="40" width="120" height="120" fill="pink" />';
        const square = new Square();
        square.setColor("green");
        const result = square.render();
        expect(result).toEqual(correctLogo);
    });
});

describe("Circle", () => {
    test("should create a yellow circle", () => {
        const correctLogo = '<circle cx="150" cy="100" r="80" fill="blue" />';
        const circle = new Circle();
        circle.setColor("circle");
        const result = circle.render();
        expect(result).toEqual(correctLogo);
    });
    test("should allow the user to choose a shape colour", () => {
        const correctLogo = '<circle cx="150" cy="100" r="80" fill="green" />';
        const circle = new Circle();
        circle.setColor("orange");
        const result = circle.render();
        expect(result).toEqual(correctLogo);
    });
});