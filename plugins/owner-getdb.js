import fs from 'fs'
let handler = async (m, { conn, text }) => {
    m.reply('Wait a Moment, Downloading Database File')
    let sesi = await fs.readFileSync('./database.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
}
handler.help = ['getdb']
handler.tags = ['owner']
handler.command = /^(getdb)$/i

handler.rowner = true

export default handler