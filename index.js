const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
require("dotenv/config")

const commandsReader = require("./scripts/commandsReader");
const prefix = config.prefix;
const commands = commandsReader(prefix);
const permissions = config.permissions

client.on("ready", () => {
  // Quando o bot ficar online
  console.log(`O bot ${client.user.tag} está pronto!`);
});

client.on("message", (msg) => {
  if (!msg.author.bot) {
    const args = msg.content.split(" ");
    if (commands[args[0]]) {
        if (verifyPerm(msg.member, args[0])) {
            commands[args[0]](client, msg);
        } else {
            msg.reply("Sem permissão para executar esse comando!")
        }
    } // Verifica se o script existe
  }
});

const verifyPerm = (member, command) => {
    let verification = !permissions[command]
    if (!verification) {
        const perms = permissions[command]

        perms.forEach(p => {
            switch (p.type) {
                case "role":
                    if (member.roles.cache.has(p.value)) {
                        verification = true
                    }
                break;
            }
        })
    } // Verifica se o usuário tem permissão para acessar o comando

    return verification
}

client.login(process.env.TOKEN);
