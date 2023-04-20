import fetch from 'node-fetch'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
 let capt = `*${htki} YOUTUBE ${htka}*
ᴘʟᴇᴀsᴇ sᴇʟᴇᴄᴛ ᴛʜᴇ ᴛʏᴘᴇ ʙᴇʟᴏᴡ
• ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ ᴘʟᴀʏᴀʙʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴀᴜᴅɪᴏ ʜɪᴛ ᴀᴜᴅɪᴏ ʙᴜᴛᴛᴏɴ
• ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ ᴀᴜᴅɪᴏ ғɪʟᴇ ᴘʟᴀʏᴀʙʟᴇ ɪɴ ᴅᴇᴠɪᴄᴇ ɢᴀʟʟᴇʀʏ, ʜɪᴛ ᴅᴏᴄᴜᴍᴇɴᴛ ʙᴜᴛᴛᴏɴ

\t${fig}
`
let buttons = [{ buttonText: { displayText: 'Audio' }, buttonId: `${usedPrefix}yta ${text} ` }, { buttonText: { displayText: 'Document' }, buttonId: `${usedPrefix}adoc ${text} ` }]
							 
let msg = await conn.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/cc8jfkX/01.jpg' }, caption: capt, footer: `${footerTXT}`, buttons }, { quoted: m })
}

handler.command = /^opta?$/i


export default handler