const { Square, Triangle, Circle } = require("./shapes");

//testing triangle shape and colour fill options
describe("Triangle", () => {
    test("should create a pink triangle", () => {
        const triangle = new Triangle();
        const correctLogo = '<polygon points="150, 18 244, 182 56, 182" fill="orange" />';
        triangle.setColor("pink");
        const result = triangle.render();
        expect(result).toEqual(correctLogo);
    });
    test("should allow the user to choose a colour for the triangle", () => {
        const triangle = new Triangle();
        const correctLogo = '<polygon points="150, 18 244, 182 56, 182" fill="pink" />';
        triangle.setColor("purple");
        const result = triangle.render();
        expect(result).toEqual(correctLogo);
    });
});

//testing square shape and colour fill options
describe("Square", () => {
    test("should create a red square", () => {
        const square = new Square();
        const correctLogo = '<rect x="90" y="40" width="120" height="120" fill="green" />';
        square.setColor("red");
        const result = square.render();
        expect(result).toEqual(correctLogo);
    });
    test("should allow the user to choose a colour for a square", () => {
        const square = new Square();
        const correctLogo = '<rect x="90" y="40" width="120" height="120" fill="pink" />';
        square.setColor("green");
        const result = square.render();
        expect(result).toEqual(correctLogo);
    });
});

//testing circle shape and colour fill options
describe("Circle", () => {
    test("should create a yellow circle", () => {
        const circle = new Circle();
        const correctLogo = '<circle cx="150" cy="100" r="80" fill="blue" />';
        circle.setColor("circle");
        const result = circle.render();
        expect(result).toEqual(correctLogo);
    });
    test("should allow the user to choose a colour for the circle", () => {
        const circle = new Circle();
        const correctLogo = '<circle cx="150" cy="100" r="80" fill="green" />';
        circle.setColor("orange");
        const result = circle.render();
        expect(result).toEqual(correctLogo);
    });
});

//RESUBMISSION CHANGES REQUIRED HERE