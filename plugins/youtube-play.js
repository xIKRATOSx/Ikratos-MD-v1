import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
try {
  if (!text) throw `Use example ${usedPrefix}${command} gustixa`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  let whmodsdev = `*${htki} PLAY ${htka}*
  π *Title:* ${title}
π *Url:* ${url}
π *Description:* ${description}
β²οΈ *Published:* ${publishedTime}
β *Duration:* ${durationH}
ποΈ *Views:* ${viewH}
  `
  await conn.sendButton(m.chat, whmodsdev, wm, botdate, [
    ['πΆ Audio', `${usedPrefix}yta ${url} yes`],
    ['π₯ Video', `${usedPrefix}ytv ${url} yes`],
    ['π Youtube Search', `${usedPrefix}yts ${text}`]
], m, fdoc)
} catch {
if (!text) throw 'Input Query'
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak Ditemukan'
  let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
  let url = 'https://www.youtube.com/watch?v=' + videoId
  let ytLink = `https://yt-downloader.akkun3704.repl.co/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  let capt = `*${htki} PLAY ${htka}*
  π *Title:* ${title}
π *Url:* ${url}
π *Description:* ${description}
β²οΈ *Published:* ${publishedTime}
β *Duration:* ${durationH}
ποΈ *Views:* ${viewH}
  `
  let buttons = [{ buttonText: { displayText: 'πΆ Audio' }, buttonId: `${usedPrefix}opta ${url}` }, { buttonText: { displayText: 'π₯ Video' }, buttonId: `${usedPrefix}optv ${url}` }]
  let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: capt, footer: '_α΄‘Κ°α΅α΅Λ’α΅α΅α΅ πΉOT π§βπΎβ π¬ππππ π¬ππ ΓΝΓ πΈπͺπ«ππ₯ππ©ππΈ_', buttons }, { quoted: m })
  // if (durationS > 4000) return conn.sendMessage(m.chat, { text: `*Download:* ${await shortUrl(ytLink)}\n\n_Duration too long..._` }, { quoted: msg })
}

}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader', 'limitmenu']
handler.command = /^play|yt?$/i


export default handler
