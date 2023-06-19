//create a new base class for all shapes
class Shape {
    constructor(color = '#000000') {
        this.color = color;
    }
    setColour(color) {
        this.color = color;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        const svg = `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
        return svg;
    }
}