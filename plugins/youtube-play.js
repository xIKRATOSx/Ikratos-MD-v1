import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
import yts from "yt-search";
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
try {
  if (!text) throw `Use example ${usedPrefix}${command} gustixa`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  let whmodsdev = `*${htki} PLAY ${htka}*
  📌 *Title:* ${title}
🔗 *Url:* ${url}
📔 *Description:* ${description}
⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
  `
  await conn.sendButton(m.chat, whmodsdev, wm, botdate, [
    ['🎶 Audio', `${usedPrefix}yta ${url} yes`],
    ['🎥 Video', `${usedPrefix}ytv ${url} yes`],
    ['🔎 Youtube Search', `${usedPrefix}yts ${text}`]
], m, fdoc)
} catch {
if (!text) throw `Use example ${usedPrefix}${command} arcade`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak Ditemukan'
  let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
  let url = 'https://www.youtube.com/watch?v=' + videoId
  let ytLink = `https://yt-downloader.akkun3704.repl.co/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  let capt = `*${htki} PLAY ${htka}*
  📌 *Title:* ${title}
🔗 *Url:* ${url}
📔 *Description:* ${description}
⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
  `
  let buttons = [{ buttonText: { displayText: '🎶 Audio' }, buttonId: `${usedPrefix}opta ${url}` }, { buttonText: { displayText: '🎥 Video' }, buttonId: `${usedPrefix}optv ${url}` }]
  let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: capt, footer: 'Follow me on instagram:\n\tinstagram.com/itx_ahmad.ali', buttons }, { quoted: m })
  // if (durationS > 4000) return conn.sendMessage(m.chat, { text: `*Download:* ${await shortUrl(ytLink)}\n\n_Duration too long..._` }, { quoted: msg })
} 
  /*catch {
 /**
 *
 * @param {*} query
 * @param {*} options
 * @returns
 *
async function search(query, options = {}) {
  const search = await yts.search({ query, hl: "es", gl: "ES", ...options });
  return search.videos;
}

if (!text) throw `Use example ${usedPrefix}${command} arcade`
const yt_play = await search(args.join(" "));
let text1 = `*${htki} PLAY ${htka}*
  📌 *Title:* ${yt_play[0].title}
🔗 *Url:* ${yt_play[0].url}
⏲️ *Published:* ${yt_play[0].ago}
⌚ *Duration:* ${secondString(yt_play[0].duration.seconds)}
👁️ *Views:* ${`${MilesNumber(yt_play[0].views)}`}
  `.trim();
let buttons = [{ buttonId: `${usedPrefix}opta ${url}`, buttonText: { displayText: '🎶 Audio' }, type: 1 }, { buttonId: `${usedPrefix}optv ${url}`, buttonText: { displayText: '🎥 Video' }, type: 1 }]
let msg = await conn.sendMessage(m.chat, { image: { url: yt_play[0].image }, caption: text1, footer: 'Follow me on instagram:\n\tinstagram.com/itx_ahmad.ali', buttons }, { quoted: m })
} catch {
  throw `I\'m Getting API Update Right Now... Please Try Later...`
 }*/
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader', 'limitmenu']
handler.command = /^play|yt?$/i


export default handler
