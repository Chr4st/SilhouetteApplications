const chalk = require('chalk');
const figlet = require("figlet");

module.exports = async function(client) {
    console.log(chalk.yellow.bold(figlet.textSync("Silhouette")));
    await console.log(chalk.red.bold(client.user.tag) + chalk.blue.bold(" Is Ready"));

    await client.user.setActivity("!help || Silhouette Applications");
    await client.user.setStatus("online");
}
