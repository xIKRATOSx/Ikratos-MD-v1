let handler = async (m, { conn, command, text }) => conn.reply(m.chat, `
*Query:* ${command} ${text}
*Answer:* ${(10).getRandom()} ${['second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'decade', 'century'].getRandom()} again...
  `.trim(), m, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['', 'kah'].map(v => 'kapan' + v + ' <text>?')
handler.tags = ['kerang', 'fun']
handler.command = /^kapan(kah)?$/i

export default handler