var inquirer = require('inquirer');

const menus = {

  main: async function() {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'What do you want to do?',
          choices: [
            'Projects',
            'Funders',
            new inquirer.Separator(),
            'Tokens',
            new inquirer.Separator(),
            'Exit'
          ]
        }
      ])
  },

  projects: async function() {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Projects> ',
          choices: [
            'List Projects',
            'Create Project',
            'View Project',
            // new inquirer.Separator(),
            // 'Back',
            // new inquirer.Separator(),
            // 'Exit'
          ]
        }
      ])
  },

  funders: async function() {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Funders> ',
          choices: [
            'List Funders',
            'Create Funder',
            // new inquirer.Separator(),
            // 'Back',
            // new inquirer.Separator(),
            // 'Exit'
          ]
        }
      ])
  },

  tokens: async function() {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Tokens> ',
          choices: [
            'Mint',
            'Aprove',
            // new inquirer.Separator(),
            // 'Back',
            // new inquirer.Separator(),
            // 'Exit'
          ]
        }
      ])
  },

  project: async function(id) {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Project> ' + id,
          choices: [
            'Donate/Pledge',
            // new inquirer.Separator(),
            // 'Back',
            // new inquirer.Separator(),
            // 'Exit'
          ]
        }
      ])
  },

  createProject: async function(defaultAccount) {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the project name?',
        filter: String,
        validate: function(value) {
          return value.length > 0;
        }
      },
      {
        type: 'input',
        name: 'url',
        message: 'What is the project url?',
        default: "status.im",
        filter: String
      },
      {
        type: 'input',
        name: 'account',
        message: 'Address of the project admin?',
        default: defaultAccount,
        validate: function(value) {
          return value.indexOf("0x") === 0;
        }
      },
      {
        type: 'input',
        name: 'parentProject',
        message: 'What is the parent project?',
        default: 0,
        filter: Number
      },
      {
        type: 'input',
        name: 'commitTime',
        message: 'Time in seconds after which the project owner can access funds',
        default: 86400,
        filter: Number
      },
      {
        type: 'input',
        name: 'plugin',
        message: 'Plugin address',
        default: "0x0000000000000000000000000000000000000000",
        validate: function(value) {
          return value.indexOf("0x") === 0;
        }
      }
    ])
  },

  createFunder: async function() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the funders name?',
        filter: String,
        validate: function(value) {
          return value.length > 0;
        }
      },
      {
        type: 'input',
        name: 'url',
        message: 'What is the funders url?',
        default: "status.im",
        filter: String
      },
      {
        type: 'input',
        name: 'commitTime',
        message: 'commit time',
        default: 86400,
        filter: Number
      },
      {
        type: 'input',
        name: 'plugin',
        message: 'Plugin address',
        default: "0x0000000000000000000000000000000000000000",
        validate: function(value) {
          return value.indexOf("0x") === 0;
        }
      }
    ])
  },

  mintToken: async function() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'tokenAddress',
        message: 'What is the token address?',
        filter: String,
        validate: function(value) {
          return value.indexOf("0x") === 0;
        }
      },
      {
        type: 'input',
        name: 'account',
        message: 'What account to mint?',
        filter: String
      },
      {
        type: 'input',
        name: 'amount',
        message: 'amount (in ether units)',
        default: 2,
        filter: Number
      }
    ])
  }

}

module.exports = menus;
