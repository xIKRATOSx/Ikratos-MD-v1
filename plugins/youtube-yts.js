import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw 'What are you looking for?'
  let cari = await youtubeSearch(`${text}`)
    let dapet = cari.video
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Video 🎥', usedPrefix + 'ytv ' + v.url + ' yes', '\n⌚ *Duration:* ' + v.durationH + '\n⏲️ *Uploaded:* ' + v.publishedTime + '\n👁️ *Views:* ' + v.view + '\n📎 *Url:* ' + v.url],
          ['Audio 🎧', usedPrefix + 'yta ' + v.url + ' yes', '\n⌚ *Duration:* ' + v.durationH + '\n⏲️ *Uploaded:* ' + v.publishedTime + '\n👁️ *Views:* ' + v.view + '\n📎 *Url:* ' + v.url]
        ]])
	})
	return conn.sendList(m.chat, '*───「 Youtube Search 」───*', `Please select the type below... \n*The text you requested:* ${text}\n\nRetype *${usedPrefix + command}* Your text to change the text again`, author, `YouTube Search 🔎`, listSections, m)
}
handler.help = ['ytsearch <query>']
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i


export default handler
