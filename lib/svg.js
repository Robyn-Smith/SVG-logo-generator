class LogoText {
    constructor(text, colour) {
        this.colour = colour;
        this.text = text;
    }
    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colour}">${this.text}</text>`;
    }
}