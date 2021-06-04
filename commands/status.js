const axios = require("axios");
const config = require("../config.json");
const Discord = require("discord.js");
const switchPlayer = require("../scripts/switchPlayer");

module.exports = async (client, msg) => {
  if (msg.content.split(" ")[1]) {
    let playerId = switchPlayer(msg.content.split(" ")[1].toLowerCase()).id;
    let playerCollor = switchPlayer(
      msg.content.split(" ")[1].toLowerCase()
    ).cor;

    if (playerId === 0) {
      msg.reply("Jogador não encontrado!");
    } else {
      const { data } = await axios.get(config.api + "/player/" + playerId);
      const player = data.player;
      const atributos = player.atributos;
      let guild = client.guilds.cache.get(msg.guild.id); // Get server ID
      let channel = client.channels.cache.get(msg.channel.id); // Get channel ID

      let vida = `${player.vida.split("/")[0]}/${10 + (atributos.vigor * 15)}`

      let embed = new Discord.MessageEmbed()
        .setColor(playerCollor || "#000000")
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
        .setTitle(`Aqui estão os dados do(a) jogador(a) ${player.jogador}!`)
        .addFields(
          { name: "Herói", value: player.heroi, inline: true },
          { name: "Pontos", value: player.pontos || 0, inline: true },
          {
            name: ":crossed_swords: Atributos",
            value: `
Força: ${atributos.forca}
Agilidade: ${atributos.agilidade}
Luta: ${atributos.luta}
Prontidão: ${atributos.prontidao}
Vigor: ${atributos.vigor}
Destreza: ${atributos.destreza}
Intelecto: ${atributos.intelecto}
Presença: ${atributos.presenca}
        `,
            inline: true,
          },
          { name: "Altura", value: player.altura + "cm" },
          {
            name: "Nível de poder",
            value: player.nivel_de_poder,
            inline: true,
          },
          { name: ":heart: Vida", value: vida , inline: true }
        )
        .setImage(player.imagem_url);

      await channel.send(embed);
    }
  } else {
    let playerNames = [""];

    const { data } = await axios.get(config.api + "/players");
    data.playersData.map((player) => {
      playerNames.push(`
        Jogador: ${player.jogador}
        Herói: ${player.heroi}
        Nível de poder: ${player.nivel_de_poder}
        :heart:  ${player.vida}`);
    });

    msg.reply(playerNames);
  }
};
