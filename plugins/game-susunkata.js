import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
let imgr = flaaa.getRandom()

    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.sendButton(m.chat, 'There are still unanswered questions in this chat', author, null, buttons, conn.susunkata[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
  ${json.soal}
  ${json.tipe}

Timeout *${(timeout / 1000).toFixed(2)} sec*
Tap ${usedPrefix}would love to help
Bonus: ${poin} XP
    `.trim()
    conn.susunkata[id] = [
        await conn.sendButton(m.chat, caption, author, `${imgr + command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.susunkata[id]) conn.sendButton(m.chat, `Time is up!\nThe answer is yes *${json.jawaban}*`, author, null, [
                ['word order', '/susunkata']
            ], conn.susunkata[id][0])
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata/i

export default handler

const buttons = [
    ['Hint', '/suka'],
    ['Nyerah', 'menyerah']
]
