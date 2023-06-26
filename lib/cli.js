//required all packages and files needed
const inquirer = require('inquirer');
const {Triangle, Square, Circle} = require('./shapes');
const { writeFile } = require('fs/promises');
const { LogoText, SVG } = require('./svg');
const prompts = require('./prompts');

class CLI {
  constructor() {}

//uses users choises to creat SVG
createSVG(choices) {
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

  run() {
    return inquirer
      .prompt(prompts)
      .then((answers) => {
        const svg = this.createSVG(answers);                          //calls create svg function
        const markup = svg.render();                                  //Renders it all SVG elements
        return writeFile("logo.svg", markup);                         // writes/creates new logo.svg file
      })
      .then(() => console.log('Generated logo.svg'))                  //this is the successful string log
      .catch((error) => {console.log('error');                        // this is the unsuccessful string log
        console.log(error);                                           // this is the actual error, it helps when fixing bugs
      });
    } 
  }   

module.exports = CLI;