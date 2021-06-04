const axios = require("axios")

const config = require("../config.json")
const switchPlayer = require("../scripts/switchPlayer")

module.exports = async (client, msg) => {
    if (msg.content.split(" ")[2]) {
        const player = msg.content.split(" ")[1]
        let newLife = 100
        newLife = msg.content.split(" ")[2]

        const playerId = switchPlayer(player.toLowerCase()).id

        const { data } = await axios.get(`${config.api}/player/${playerId}`)

        

        const totalLife = 10 + (data.player.atributos.vigor * 15) 

        if(newLife > totalLife) {
            newLife = totalLife
        } else if (newLife < 0) {
            newLife = 0
        }

        await axios.put(`${config.api}/atualizar/${playerId}`, { vida: `${newLife}/${totalLife}` })

        msg.reply(`A vida do jogador ${data.player.jogador} foi atualizada!`)
    } else {
        msg.reply(`Comando incorreto!`)
    }
}