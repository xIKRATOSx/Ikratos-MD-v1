import { tebakkata } from '@bochilteam/scraper'

let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (id in conn.tebakkata) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.tebakkata[id][0])
        throw false
    }
    const json = await tebakkata()
    let caption = `
${json.soal}
Timeout *${(timeout / 1000).toFixed(2)} seconds*
Tap ${usedPrefix} guess for help
Bonus: ${poin} XP
`.trim()
    conn.tebakkata[id] = [
        await conn.sendButton(m.chat, caption, author, ['hint', `${usedPrefix}teka`], m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkata[id]) conn.sendButton(m.chat, `Time is up!\nThe answer is yes *${json.jawaban}*`, author, ['guess', `${usedPrefix}tebakkata`], conn.tebakkata[id][0])
            delete conn.tebakkata[id]
        }, timeout)
    ]
}
handler.help = ['tebakkata']
handler.tags = ['game']
handler.command = /^tebakkata/i

export default handler