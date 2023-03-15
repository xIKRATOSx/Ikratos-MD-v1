import fetch from 'node-fetch'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
 let capt = `*${htki} Truth OR Dare ${htka}*
 _Select the task you want to do_\n\n\n*If you will chose _truth_ then you have to be honest and answer the question*


 
 *If you will chose _dare_ then you have to be honest and done your dare*
 `
let buttons = [{ buttonText: { displayText: 'Truth' }, buttonId: `${usedPrefix}truth ${text} ` }, { buttonText: { displayText: 'Dare' }, buttonId: `${usedPrefix}dare ${text} ` }]
							 
let msg = await conn.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/cc8jfkX/01.jpg' }, caption: capt, footer: `WhatsApp Bot created by Ahmad Ali`, buttons }, { quoted: m })
}

handler.command = /^td?$/i
handler.group = true


export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


