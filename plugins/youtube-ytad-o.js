import fetch from 'node-fetch'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
 let capt = `*${htki} YOUTUBE ${htka}*
 _Please select the type below_
 `
let buttons = [{ buttonText: { displayText: 'Audio' }, buttonId: `${usedPrefix}yta ${text} ` }, { buttonText: { displayText: 'Document' }, buttonId: `${usedPrefix}adoc ${text} ` }]
							 
let msg = await conn.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/cc8jfkX/01.jpg' }, caption: capt, footer: '_*Whatsapp bot by AHMAD ALI*_', buttons }, { quoted: m })
}

handler.command = /^opta?$/i


export default handler