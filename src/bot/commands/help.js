module.exports = {
    name: "help",
    cooldown: 5,
    aliases: ["commands"],

    run: async function(client, message, args) {
        try {
          message.channel.send({
            embed: {
              title: 'Bot Commands',
              description: `
                            sl!help
                            sl!setup
                            sl!open
                            sl!add
                            sl!remove
                            sl!rename
                            sl!prefix
                            sl!ping
                           `
            }
          })
        } catch (err) {
            return;
        }
    }
}
