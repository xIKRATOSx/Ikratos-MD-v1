import fetch from 'node-fetch'
let handler = async (m, { conn, text, args }) => {
if (!args[0]) throw `*Entre The Name Of An APP/APK*`
try {
let enc = encodeURIComponent(text)
let json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=brunosobrino&q=${enc}`)
let gPlay = await json.json()

if (!gPlay.titulo) return m.reply(`No Results`)
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`🔍 Results: ${gPlay.titulo}
🧬 Identifier: ${gPlay.id}
⛓️ Link: ${gPlay.link}
🖼️ Image: ${gPlay.image}
✍️ Developer: ${gPlay.developer}
📜 Description: ${gPlay.descripcion}
🎭 Free?: ${gPlay.free}
💸 Price: ${gPlay.price}
📈 Score: ${gPlay.score}`},{quoted:m})
} catch {
await m.reply('*Error, Server Is Busy Right Now Please Try Later*')    
}}
handler.help = ['playstore <aplicacion>']
handler.tags = ['internet']
handler.command = /^(playstore|apksearch)$/i
export default handler