let timeout = 60000
let poin = 500
let poin_lose = -100
let handler = async (m, { conn, usedPrefix }) => {
  conn.suit = conn.suit ? conn.suit : {}
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw 'Selesaikan suit mu yang sebelumnya'
  if (!m.mentionedJid[0]) return m.reply(`_Who do you want to challenge??_\nTag the person.. Example\n\n${usedPrefix}suit @${owner[1]}`, m.chat, { contextInfo: { mentionedJid: [owner[1] + '@s.whatsapp.net'] } })
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
  let id = 'suit_' + new Date() * 1
  let caption = `
_*ғᴜɴ sᴜɪᴛ ᴘᴠᴘ*_

@${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit

Please @${m.mentionedJid[0].split`@`[0]} 
`.trim()
  let footer = `Type "accept/ok/gas" to start the suit\nType "decline/cancel/later" to reject`
  conn.suit[id] = {
    chat: await conn.sendButton(m.chat, caption, wm, null, [[ 'Accept', 'ok'], [ 'Reject', 'tolak']], m, { mentions: conn.parseMention(caption) }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `_Suit time is over_`, m)
      delete conn.suit[id]
    }, timeout), poin, poin_lose, timeout
  }
}
handler.tags = ['game']
handler.help = ['suitpvp'].map(v => v + ' @tag')
handler.command = /^suitpvp$/i

handler.group = true
handler.limit = true

export default handler