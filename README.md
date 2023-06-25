# SVG-logo-generator

# Description

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
# Installation
In order to use this code to generate an SVG logo the user must install node js inquirer and express?

# Testing
This code is tested using jest. The user must install jest to test the validity of the code. The files 'shapes.test.js' and 'svg.tests.js' contain the code that tests the accuracy of the code by comparing the result to the desired reponse.

# Usage
Once the user has installed all the neccessary packages, they can then run the code in the terminal by entering 'node index.js'. After this step is complete, the user will have to answer a series of prompts:
* 'What 3 letters would you like to appear on your logo?'
* 'What colour would you like your text to be?'
* 'What colour would you like the background?'
* 'What shape would you like your logo?'
When the user has ansered all of these questions, they should see the text 'Generated logo.svg' appear in the command line. They can then see their generated SVG logo by either viewing on the 'Svg Preview' Visual Studio Code extension or ....

# Walkthrough Video