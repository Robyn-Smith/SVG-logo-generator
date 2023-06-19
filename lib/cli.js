//mini project starting off point....
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shapes');
const { writefile } = require('fs/promises');
const { LogoText, SVG } = require('./svg');
const prompts = require('./prompts');

class CLI {
  constructor() {

  }
  run() {
    return inquirer
      .prompt(prompts)
      .then((responses) => {

        //generate the svg-- jsn
        const svg = this.generateSVG(responses);

        //Render it so all the elements are in the SVG--jsn
        const markup = svg.render();

        //write it to a file --jsn
        return writefile("logo.svg", markup);
      })
      .then(() => console.log('success!'))
      .catch((err) => {
        console.log(err);
        console.log('error');
      });
    }

    generateSVG(options) {
      const logoText = new LogoText(options.text, options.textColour);
      switch (options.shape) {
        case "circle":
          const circle = new Circle(options.shapeColour);
          return new SVG(circle, logoText);
        case "square":
          const square = new Square(options.shapeColour);
          return new SVG(square, logoText);
        case "triangle":
          const triangle = new Triangle(options.shapeColour);
          return new SVG(triangle, logoText);
      }
    }
  }     
module.exports = CLI;