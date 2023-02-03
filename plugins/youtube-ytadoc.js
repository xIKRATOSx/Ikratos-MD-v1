import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*ENTRE THE LINK OF A YOUTUBE VIDEO*'
await m.reply(`*_Please wait downloading your audio document_*`)
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m})
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=85faf717d0545d14074659ad&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error bad gataway'
let n2 = lolh.result.link
await conn.sendMessage(m.chat, { document: { url: n2 }, mimetype: 'audio/mpeg', fileName: `${n}.mp3`}, {quoted: m})
} catch {
await conn.reply(m.chat, '*404 ERROR*', m)}
}}
handler.command = /^ytmp3doc|ytadoc|adoc|ytmp3.2|yta.2$/i
export default handler