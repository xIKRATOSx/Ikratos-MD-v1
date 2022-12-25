import { WAProto } from '@adiwajshing/baileys'

let handler = async (m, { conn, command, usedPrefix, text }) => {
    let M = WAProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw `Reply to the message with a command *${usedPrefix + command}*`
    if (!text) throw `Usage:${usedPrefix + command} <teks>\n\nExample:\n${usedPrefix + command} tes`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `${text} has been registered!`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    if (global.db.data.chats[m.chat].getmsg) return m.reply(`Successfully added a message ${text}
    
    Access by typing its name`.trim())
    else return await conn.sendButton(m.chat, `Successfully added a message ${text}
    
    access with ${usedPrefix}get${which} ${text}`, wm, null, [['Aktifkan', '.on getmsg']], m)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'stiker', 'gif'].map(v => 'add' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|stic?ker|gif)$/

export default handler