var inquirer = require('inquirer');
const Web3 = require("web3");

const web3 = new Web3();

const LiquidPledgingJSONConfig = require("../dist/contracts/LiquidPledging.json");
let LiquidPledging;

const StandardTokenJSONConfig = require("../dist/contracts/StandardToken.json");
let StandardToken;

function doAction(actionText, action) {
  console.dir(actionText)
  const confirmation = inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'action',
        message: 'Execute?',
      }
    ]).then((answer) => {
      if (answer.action === false) return;
      console.dir("executing...");
      try {
        action()
      } catch (e) {
        console.dir("== error")
        console.dir(e)
      }
    })
}

class Actions {

  constructor() {
  }

  connect(cb) {
    web3.setProvider("ws://localhost:8556");

    setTimeout(async () => {
      let accounts = await web3.eth.getAccounts();
      console.dir("== accounts");
      console.dir(accounts);
      web3.eth.defaultAccount = accounts[0]

      LiquidPledging = new web3.eth.Contract(LiquidPledgingJSONConfig.abiDefinition, LiquidPledgingJSONConfig.address);
      StandardToken = new web3.eth.Contract(StandardTokenJSONConfig.abiDefinition, StandardTokenJSONConfig.address);

      cb();
    }, 1000);
  }

  web3() {
    return web3;
  }

  addProject(params) {
    let text = `await LiquidPledging.methods.addProject(\"${params.name}\", \"${params.url}\", \"${params.account}\", ${params.parentProject}, ${params.commitTime}, \"${params.plugin}\").send({from: \"${web3.eth.defaultAccount}\", gas: 2000000})`
    doAction(text, async () => {
      let projectReceipt = await LiquidPledging.methods.addProject(params.name, params.url, params.account, params.parentProject, params.commitTime, params.plugin).send({from: web3.eth.defaultAccount, gas: 2000000});
      console.dir("txHash: " + projectReceipt.transactionHash)
      var projectId = projectReceipt.events.ProjectAdded.returnValues.idProject;

      console.log(projectId);
    });
  }

  addGiver(params) {
    let text = `await LiquidPledging.methods.addGiver(\"${params.name}\", \"${params.url}\", ${params.commitTime}, \"${params.plugin}\").send({from: \"${web3.eth.defaultAccount}\", gas: 2000000})`
    doAction(text, async () => {
      let funderReceipt = await LiquidPledging.methods.addGiver(params.name, params.url, params.commitTime, params.plugin).send({from: web3.eth.defaultAccount, gas: 2000000})
      console.dir("txHash: " + funderReceipt.transactionHash)
      var funderId = funderReceipt.events.GiverAdded.returnValues.idGiver;
      console.log(funderId);
    });
  }

  mintToken(params) {
    let text = `await StandardToken.methods.mint(\"${params.account}\", web3.utils.toWei(\"${params.amount}\", \"ether\")).send({gas: 2000000})`
    doAction(text, async () => {
      let mintReceipt = await StandardToken.methods.mint(params.account, web3.utils.toWei(params.amount, "ether")).send({gas: 2000000})
      console.dir("txHash: " + mintReceipt.transactionHash)
    });
  }

  approveToken(params) {
    let text = `await StandardToken.methods.approve(\"${LiquidPledging.options.address}\", web3.utils.toWei(\"${params.amount}\", \"ether\")).send({gas: 2000000})`
    doAction(text, async () => {
      let mintReceipt = await StandardToken.methods.approve(LiquidPledging.options.address, web3.utils.toWei(params.amount, "ether")).send({gas: 2000000})
      console.dir("txHash: " + mintReceipt.transactionHash)
    });
  }

  donate(params) {
    let text = `await LiquidPledging.methods.donate(${params.funderId}, ${params.projectId}, \"${LiquidPledging.options.address}\", web3.utils.toWei(\"${params.amount}\", \"ether\")).send({gas: 2000000});`
    doAction(text, async () => {
      let donateReceipt = await LiquidPledging.methods.donate(params.funderId, params.projectId, LiquidPledging.options.address, web3.utils.toWei(params.amount, "ether")).send({gas: 2000000});
      console.dir("txHash: " + donateReceipt.transactionHash)
    });
  }

}

module.exports = Actions;
