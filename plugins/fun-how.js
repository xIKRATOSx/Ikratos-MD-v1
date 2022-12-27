let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `Use example ${usedPrefix}${command} i'm`
    conn.reply(m.chat, `
  ${command} *${text}*
  *${text}* is *${(101).getRandom()}*% ${command.replace('how', '').toUpperCase()}
  `.trim(), m, m.mentionedJid ? {
        mentions: m.mentionedJid
    } : {})
}
handler.help = ['gay', 'smart', 'beautiful', 'handsome', 'gabut', 'crazy', 'lesbi', 'stress', 'bucin', 'jones', 'sadboy'].map(v => 'how' + v + ' who?')
handler.tags = ['kerang', 'fun']
handler.command = /^how(gay|smart|beautiful|handsome|gabut|crazy|lesbi|stress?|bucin|jones|sadboy)/i

export default handler