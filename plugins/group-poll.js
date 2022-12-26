let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `There is no text for the survey \n\nExample : \n*${usedPrefix + command}* Order  |Hai|Sis`
if (!text.includes('|')) throw  `Separate the polls with a sign *|* \n\nExample : \n*${usedPrefix + command}* my survey|n  |How|are|you?`

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			return conn.sendPoll(m.chat, `📋 *Survey requested by:* ${name}\n\n*Order:* ${text.split('|')[0]}`, a, m)
}
handler.help = ['poll <halo|apa|kabar>']
handler.tags = ['group'] 
handler.command = ['poll', 'polling'] 
handler.group = true

export default handler
