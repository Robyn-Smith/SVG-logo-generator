const { SVG, LogoText } = require("./svg");
const { Square } = require("./shapes");

test("should create an svg element at 300 x 200 pixels", () => {
    const color = "red";
    const correctLogo =
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}${this.logotext.render()}</svg><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">YES</text>`

    const square = new Square(color);
    const logoText = new LogoText("YES", color);

    const svg = new SVG(square, logoText);
    expect(svg.render()).toEqual(correctLogo)
})