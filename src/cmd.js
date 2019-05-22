var inquirer = require('inquirer');
const menus = require('./menus.js');
const Actions = require('./actions.js');

async function app(actions) {
  console.dir("### Liquid Funding Console")
  let action = (await menus.main()).action
  let subAction

  if (action === 'Projects') {
    subAction = (await menus.projects()).action

    if (subAction === 'List Projects') {
    } if (subAction === 'Create Project') {
      let params = (await menus.createProject("0x0000000000000000000000000000000000000001"))
			actions.addProject(params);
    } if (subAction === 'view Project') {
    }
  } else if (action === 'Funders') {
    subAction = (await menus.funders()).action

    if (subAction === 'List Funders') {
    } if (subAction === 'Create Funder') {
      let params = (await menus.createProject())
			actions.addProject(params);
    }
  } else if (action === 'Tokens') {
    subAction = (await menus.tokens()).action

    if (subAction === 'Mint') {
      let params = (await menus.mintToken())
			action.mintToken(params);
    } if (subAction === 'Aprove') {
    }
  } else if (action === 'Exit') {
    process.exit()
  } else {
    console.dir("unknown action: " + action)
  }
}

const actions = new Actions();

actions.connect(async () => {
	app(actions)
});

