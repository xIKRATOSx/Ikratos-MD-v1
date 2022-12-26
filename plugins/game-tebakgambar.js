import { tebakgambar } from '@bochilteam/scraper'

let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (id in conn.tebakgambar) {
        conn.sendButton(m.chat, 'There are still unanswered questions in this chat', author, null, buttons, conn.tebakgambar[id][0])
        throw false
    }
    let json = await tebakgambar()
    // if (!json.status) throw json
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} sec*
Tap ${usedPrefix}hint for hint
Bonus: ${poin} XP
    `.trim()
    conn.tebakgambar[id] = [
        await conn.sendButton(m.chat, caption, author, json.img, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakgambar[id]) conn.sendButton(m.chat, `Time is up!\nThe answer is *${json.jawaban}*`, author, null, [
                ['guess the picture', '/tebakgambar']
            ], conn.tebakgambar[id][0])
            delete conn.tebakgambar[id]
        }, timeout)
    ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i

export default handler

const buttons = [
    ['hint', '/hint'],
    ['nyerah', 'menyerah']
]