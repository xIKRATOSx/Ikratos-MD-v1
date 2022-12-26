import { siapakahaku } from '@bochilteam/scraper'

let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.siapakahaku[id][0])
        throw false
    }
    const json = await siapakahaku()
    let caption = `
who am i? ${json.soal}
Timeout *${(timeout / 1000).toFixed(2)} seconds*
Tap ${usedPrefix}who for help
Bonus: ${poin} XP
`.trim()
    conn.siapakahaku[id] = [
        await conn.sendButton(m.chat, caption, author, ['hint', `${usedPrefix}who`], m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.sendButton(m.chat, `Time is up!\nThe answer is yes *${json.jawaban}*`, author, ['siapahaku', '/siapakahaku'], conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i

export default handler