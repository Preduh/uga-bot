const axios = require("axios");
const config = require("../config.json");
const switchPlayer = require("../scripts/switchPlayer");

module.exports = async (client, msg) => {
  if (msg.content.split(" ")[2]) {
    const player = msg.content.split(" ")[1];
    const pontos = msg.content.split(" ")[2];

    let playerId = switchPlayer(player).id || 0;

    if (!playerId == 0) {
      try {
        if (Number.isInteger(parseInt(pontos))) {
          await axios.put(`${config.api}/atualizar/${playerId}`, { pontos });

          msg.reply("Pontos atualizados!");
        } else {
            msg.reply("Falha ao atualizar pontos!")
        }
      } catch (error) {
        msg.reply("Falha ao atualizar pontos!");
      }
    } else {
      msg.reply("Jogador não encontrado!");
    }
  } else if (msg.content.split(" ")[1]) {
    const player = msg.content.split(" ")[1];

    let playerId = switchPlayer(player).id || 0;

    if (playerId == 0) {
      msg.reply("Jogador não encontrado!");
    } else {
      msg.reply("Insira a quantidade de pontos!");
    }
  } else {
    msg.reply("Insira o nome do jogador!");
  }
};
