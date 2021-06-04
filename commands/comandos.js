const Discord = require("discord.js");

module.exports = (client, msg) => {
  let channel = client.channels.cache.get(msg.channel.id); // Get channel ID

  let embed = new Discord.MessageEmbed()
    .setColor("#6FD84B")
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
    .addFields(
      {
        name: ":page_facing_up: !status (NomeDoJogador) - MEMBRO",
        value: `Exibe os dados do jogador`,
      },
      {
        name: ":scroll: !status - MEMBRO",
        value: "Lista os dados gerais de todos os jogadores",
      },
      {
        name: ":sunrise_over_mountains: !imagem (NomeDoJogador) (UrlDaImagem) - MEMBRO",
        value: "Atualiza a imagem do jogador",
      }
    )
    .addFields({
      name: ":white_check_mark: !pontos (NomeDoJogador) (Quantidade de pontos) - MESTRE",
      value: "Atualiza a quantidade de pontos do jogador escolhido",
    });

  channel.send(embed);
};
