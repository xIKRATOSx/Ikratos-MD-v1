import fetch from 'node-fetch'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
 let capt = `*${htki} Truth OR Dare ${htka}*
 _Select the task you want to do_\n*If you will chose _truth_ then you have to be honest and answer the question*
 *If you will chose _dare_ then you have to be honest and done your dare*
 `
let buttons = [{ buttonText: { displayText: 'Truth' }, buttonId: `${usedPrefix}truth ${text} ` }, { buttonText: { displayText: 'Dare' }, buttonId: `${usedPrefix}dare ${text} ` }]
							 
let msg = await conn.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/cc8jfkX/01.jpg' }, caption: capt, footer: `Follow me on instagram:\n\t\tinstagram.com\itx_ahmad.ali`, buttons }, { quoted: m })
}

handler.command = /^tod?$/i


export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
