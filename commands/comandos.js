module.exports = (client, msg) => {
    msg.reply(`
        Lista de comandos:
        - !status (NomeDoJogador). Ex: !status marks - Exibe os dados do jogador
        - !status - Exibe os dados de todos os jogadores
        - !imagem (NomeDoJogador) (URL). Ex: !imagem sinc http://www.zzz.com/...
        
        -------------------------------- EXCLUSIVO DO MESTRE --------------------------------
        - !pontos (NomeDoJogador) (Quantidade de pontos). Ex: !pontos karen 3
    `)
}