//shape refers to all shape elements
class Shape {
    constructor(color = '#ffffff') {this.color = color;}
    setColour(color) {this.color = color;}};

// Triangle parameters
class Triangle extends Shape {
    constructor(color) {super(color);}
    render() {
        const svg = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
        return svg;}};

//Square parameters
class Square extends Shape {
    constructor(color) {super(color);}
    render() {
        const svg = `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
        return svg;}};

//Circle parameters
class Circle extends Shape {
    constructor(color) {super(color);}
    render() {
        const svg = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
        return svg;}};

module.exports = { Triangle, Square, Circle };