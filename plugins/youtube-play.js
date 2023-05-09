/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Ikratos-MD-v1
 * @description : Ikratos-MD-v1,A Multi-functional simple and light weight whatsapp bot.
 * @version 1.0.0
 * @file : youtube-.js
 **/
import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
import yts from "yt-search";

/**
 *
 * @param {*} query
 * @param {*} options
 * @returns
 */
async function search(query, options = {}) {
  const search = await yts.search({ query, hl: "en", gl: "EN", ...options });
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = "$1.";
  let arr = number.toString().split(".");
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join(".") : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

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
👀 *Views:* ${viewH}
  `
  await	m.react('▶️') 
  await conn.sendButton(m.chat, whmodsdev, wm, botdate, [
    ['🎶 Audio', `${usedPrefix}opta ${url} yes`],
    ['🎥 Video', `${usedPrefix}optv ${url} yes`],
    ['🔎 Youtube Search', `${usedPrefix}yts ${text}`]
], m, fdoc)
} catch { try {
  if (!text) throw `Use example ${usedPrefix}${command} arcade`
  await conn.reply(m.chat, global.wait, m)
  const yt_play = await search(args.join(" "));
  let ikratos1 = `*◉————⌈ PLAY ⌋————◉*\n
📌 *Title:* ${yt_play[0].title}
⏲️ *Published:* ${yt_play[0].ago}
⌚ *Duration:* ${secondString(yt_play[0].duration.seconds)}
👀 *Views:* ${`${MilesNumber(yt_play[0].views)}`}
👤 *Author:* ${yt_play[0].author.name}
⏯️ *Chanal:* ${yt_play[0].author.url}
🔗 *Url:* ${yt_play[0].url}`.trim();
let buttons = [{ buttonText: { displayText: '🎶 Audio' }, buttonId: `${usedPrefix}opta ${url}` }, { buttonText: { displayText: '🎥 Video' }, buttonId: `${usedPrefix}optv ${url}` }] 
let msg = await conn.sendMessage(m.chat, { image: { url: yt_play[0].image }, caption: ikratos1, footer: 'Follow me on instagram:\n\tinstagram.com/itx_ahmad.ali', buttons }, { quoted: m })
} catch { try {
  let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)  ).json();
  let { videoId, title, views, published, thumbnail } = await vid2.result[0];
  const url = "https://www.youtube.com/watch?v=" + videoId;
  let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
  let jsonn = await ytLink.json();
  let aud = await jsonn.result.audio;
  let icapt = `📌 *Title:* ${title}
⏲️ *Published:* ${published}
👀 *Views:* ${views}
🔗 *Url:* ${url}`;
let buttons = [{ buttonText: { displayText: '🎶 Audio' }, buttonId: `${usedPrefix}opta ${url}` }, { buttonText: { displayText: '🎥 Video' }, buttonId: `${usedPrefix}optv ${url}` }];
let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, icapt: ikratos1, footer: 'Follow me on instagram:\n\tinstagram.com/itx_ahmad.ali', buttons }, { quoted: m })
conn.sendMessage(
    m.chat,
    {
      audio: { url: aud },
      mimetype: "audio/mp4",
      fileName: `${title}.mp3`,
    },
    { quoted: m }
  );
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
👀 *Views:* ${viewH}
  `
  let buttons = [{ buttonText: { displayText: '🎶 Audio' }, buttonId: `${usedPrefix}opta ${url}` }, { buttonText: { displayText: '🎥 Video' }, buttonId: `${usedPrefix}optv ${url}` }]
  await m.react('▶️')
  let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: capt, footer: 'Follow me on instagram:\n\tinstagram.com/itx_ahmad.ali', buttons }, { quoted: m })
  // if (durationS > 4000) return conn.sendMessage(m.chat, { text: `*Download:* ${await shortUrl(ytLink)}\n\n_Duration too long..._` }, { quoted: msg })
     }
   }
 }
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader', 'limitmenu']
handler.command = /^play|yt?$/i

export default handler
