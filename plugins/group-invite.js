import { WA_DEFAULT_EPHEMERAL } from '@adiwajshing/baileys'

let handler = async (m, { conn, args, participants, usedPrefix, command }) => {
	 let text = args[0]
    if (!text) throw `_Enter the number!_\nExample:\n\n${usedPrefix}invite 923400027813`
    let number = text + '@s.whatsapp.net'
    m.reply('_Being processed..._')
    const inviteCode = await conn.groupInviteCode(m.chat)
    const response = await conn.sendMessage(number, `Hey! Join my WhatsApp group here: https://chat.whatsapp.com/${inviteCode}`, WA_DEFAULT_EPHEMERAL, { contextInfo: { mentionedJid: [number] } })
    if (response.status == 200) {
        m.reply(`_Invite message sent to ${text}_`)
    } else {
        m.reply('_Failed to send invite message!_')
    }
}
handler.help = ['invite'].map(v => v + ' <number>')
handler.tags = ['group']
handler.command = /^invite$/i

handler.admin = true
handler.group = true
handler.fail = null

export default handler
