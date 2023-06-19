const inquirer = require("inquirer")
const fs = require("fs")

let questions = inquirer
    .prompt([
        {
            type: 'input',
            name: 'description',
            message: "Write your description for readme"
        },
        {
          type: 'list',
          name: 'size',
          mesage: 'What point font would you like?',
          choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
          filter(val){
              return val.toLowerCase();
          },
            },
  ])

  .then(answers =>{
  let readmeText =
  
  `# Project descriiption
  ${answers.description}
  ## The second largest heading
  ${generateLicense(answers.size)}
  ###### The smallest heading`
  
  fs.writeFile("README.md", readmeText, err=> console.log(err))
  console.log(readmeText)
})