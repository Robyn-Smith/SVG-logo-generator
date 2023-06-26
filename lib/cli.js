//mini project starting off point....
const inquirer = require('inquirer');
const {Triangle, Square, Circle} = require('./shapes');
const { writeFile } = require('fs/promises');
const { LogoText, SVG } = require('./svg');
const prompts = require('./prompts');

class CLI {
  constructor() {

  }
  run() {
    return inquirer
      .prompt(prompts)
      .then((answers) => {

        //generate the svg-- jsn
        const svg = this.generateSVG(answers);

        //Render it so all the elements are in the SVG--jsn
        const markup = svg.render();

        //write it to a file --jsn
        return writeFile("logo.svg", markup);
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((error) => {console.log('error');
        console.log(error);
      });
    }

    generateSVG(choices) {
      const logoText = new LogoText(choices.text, choices.textColor);
      switch (choices.shape) {
        case "triangle":
          const triangle = new Triangle(choices.shapeColor);
          return new SVG(triangle, logoText);
        case "square":
          const square = new Square(choices.shapeColor);
          return new SVG(square, logoText); 
        case "circle":
          const circle = new Circle(choices.shapeColor);
          return new SVG(circle, logoText);
      }
    }
  }     
module.exports = CLI;