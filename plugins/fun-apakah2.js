let handler = async (m, { command, text }) => m.reply(`
*Query:* ${command} ${text}
*Answer:* ${['Yes', 'Maybe yes', 'Maybe', 'Maybe not', 'No', 'Not likely'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['apakah <teks>?']
handler.tags = ['kerang', 'fun']
handler.command = /^what$/i

export default handler
