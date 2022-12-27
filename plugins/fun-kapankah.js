let handler = async (m, { conn }) => conn.reply(m.chat, `
*Query:* ${m.text}
*Answer:* ${(10).getRandom()} ${['second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'decade', 'century'].getRandom()} again ...
  `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
} : {})

handler.help = ['', 'kah'].map(v => 'kapan' + v + ' <text>?')
handler.tags = ['kerang', 'fun']
handler.customPrefix = /(\?$)/
handler.command = /^kapan(kah)?$/i

export default handler