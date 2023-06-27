
const inquirer = require("inquirer")
const fs = require("fs")

let questions = inquirer
    .prompt([
        {
            type: 'input',
            name: 'description',
            message: "Write a description of your description"

        
          },
          {
            type: 'list',
            name: 'size',
            mesage: 'What size do you need?',
            choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
            filter(val){
                return val.toLowerCase();
            },
              },
            
        
              
    ]).then(answers =>{

        
        let readmeText = `# Project descriiption
        ${answers.description}
        
        ## The second largest heading
        
        ${generateLicense(answers.size)}
        
        ###### The smallest heading
        `
        
        fs.writeFile("README.md", readmeText, err=> console.log(err))
        console.log(readmeText)
        
        
       
    })
    function generateLicense(license){
            
        if (license === "Jumbo") {
            
            return"![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]"
        }
        
        
        
        return `` /*do same here as on lines 45-49 for other sizes*/
    }