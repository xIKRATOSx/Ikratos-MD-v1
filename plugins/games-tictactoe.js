import TicTacToe from '../lib/tictactoe.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
    if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '*🔰 You are still in a game room*\n\n*👉🏻 To exit type "exit" by replying to the start message sent by the Bot*\n\n*You can also delete the room by typing #delttt ~room name ~*'
    let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    // m.reply('[WIP Feature]')
    if (room) {
        m.reply('*✅ A player enters the room*')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
            return {
                X: '❌',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v]
        })
        let str = `
*Classic game of jack or 3 in a row*
*How to play? R=* _Respond to the message sent by the Bot with the game board, the message must contain the position you want to be in (1,2,3,4,5,6,7,8,9)_

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

*It's @${room.game.currentTurn.split('@')[0]}*'s turn
*- To surrender you can use the word "exit", do not write any prefix or " or * and the message must be responding to the Bot's message where the game table comes out*
`.trim()
if (room.x !== room.o) await conn.sendMessage(room.x, { image: { url: 'https://i.ibb.co/BP8RnZf/dare.jpg' }, caption: str, footer: `${footerTXT}` }, m, {contextInfo: {mentionedJid: conn.parseMention(str) }} )
await conn.sendMessage(room.o, { image: { url: 'https://i.ibb.co/BP8RnZf/dare.jpg' }, caption: str, footer: `${footerTXT}` }, m, {contextInfo: {mentionedJid: conn.parseMention(str) }} )
/*if (room.x !== room.o) await conn.sendMessage(room.x, str, m, {contextInfo: {mentionedJid: conn.parseMention(str) }} )
await conn.sendMessage(room.o, str, m, {contextInfo: {mentionedJid: conn.parseMention(str) }} )*/
        /*if (room.x !== room.o) m.reply(str, room.x, {contextInfo: {mentionedJid: conn.parseMention(str) }} )
        m.reply(str, room.o, {contextInfo: {mentionedJid: conn.parseMention(str) }} )*/
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        }
        if (text) room.name = text
        m.reply('*👾 Waiting for player 2 to join the room* ' + (text ? `*player 2 must type the command below repeating capital letters, periods and accents:*
${usedPrefix}${command} ${text}` : ''))
        conn.game[room.id] = room
    }
}

handler.help = ['tictactoe', 'ttt'].map(v => v + ' [custom room name]')
handler.tags = ['game']
handler.command = /^(tictactoe|t{3})$/

export default handler