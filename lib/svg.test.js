// required files the code refers to
const { Circle } = require("./shapes");
const { LogoText, SVG } = require("./svg");

//testing the size of the SVG
describe("Size", () => {
test("should create an svg element that is 300 x 200 pixels", () => {
    const color = "pink";
    const correctLogo =
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}${this.logotext.render()}</svg><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">YES</text>`
    const logoText = new LogoText("YES", color);
    const circle = new Circle(color);
    const svg = new SVG(circle, logoText);
    expect(svg.render()).toEqual(correctLogo)
});
});

//RESUBMISSION CHANGES ARE REQUIRED HERE