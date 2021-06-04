const axios = require('axios')
const config = require('../config.json')
const switchPlayer = require('../scripts/switchPlayer')

module.exports = async (client, msg) => {
    let playerId = switchPlayer(msg.content.split(" ")[1].toLowerCase()).id;
    if (msg.content.split(" ")[2]) {
          if (playerId != 0) {
              await axios.put(config.api + "/atualizar/" + playerId, {
                  "imagem_url": msg.content.split(" ")[2]
              })
          } else {
              msg.reply("Jogador não encontrado!")
          }
    } else {
        msg.reply("Jogador não encontrado!")
    }
}