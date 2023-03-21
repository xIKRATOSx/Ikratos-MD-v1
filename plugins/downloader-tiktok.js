
import fg from 'api-dylux' 
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `✳Enter a Tiktok link\n\n Example : ${usedPrefix + command} https://vm.tiktok.com/ZMNqyusVD/?k=1`
if (!args[0].match(/tiktok/gi)) throw `verify that the link is from tiktok`

try {
    let p = await fg.tiktok(args[0]) 
    let te = `
┌─⊷ TIKTOK
▢ *Username:* ${p.author}
▢ *Descripción:* ${p.title}
└───────────`
    conn.sendButton(m.chat, te, igfg, p.nowm, [['⎘ Stalkig', `${usedPrefix}ttstalk ${p.author.replace(/^@/, '')}`], ['♫ Audio', `${usedPrefix}tomp3`]], m)
    } catch {  	
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw 'Error downloading the video'
    conn.sendButton(m.chat, `
┌─⊷ TIKTOK
▢ *Nickname:* ${nickname} ${description ? `\n▢ *Description:* ${description}` : ''}
└───────────`, igfg, url, [['♫ Audio', `${usedPrefix}tomp3`]], m)
} 
    
}  
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.diamond = true

export default handler




/*import fetch from 'node-fetch'
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import { tiktokdl, tiktokdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
if (!text) throw `*Where is the link?*\n\n*—◉ EXAMPLE:*\n*${usedPrefix + command} https://vm.tiktok.com/ZML42vSnn/*`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*ERROR MAYBE YOUR LINK IS INCORRECT*`
let texto = `* @${m.sender.split`@`[0]} Wait a moment downloading your video*`
try {
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'global.wm', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/xIKRATOSx/Ikratos-MD-v1' }, mentionedJid: [m.sender] }}}, { quoted: m })
let url = (await fetch(text)).url
let res = await (await fetch(`https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id=${url.split('?')[0].split('/')[5]}`)).json()
let data = res.aweme_detail.video.play_addr.url_list
let meta = await getInfo(url).catch(_ => {})
await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
let buttons = [{ buttonText: { displayText: '𝙰𝚄𝙳𝙸𝙾' }, buttonId: `${usedPrefix}tomp3` }]
conn.sendMessage(m.chat, { video: { url: data[data.length - 1] }, caption: 'global.wm', footer: await shortUrl(data[data.length - 1]), buttons }, { quoted: m })
} catch {
try {
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'global.wm', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/xIKRATOSx/Ikratos-MD-v1' }, mentionedJid: [m.sender] }}}, { quoted: m })
const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark
await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
let buttons = [{ buttonText: { displayText: '𝙰𝚄𝙳𝙸𝙾' }, buttonId: `${usedPrefix}tomp3` }]
conn.sendMessage(m.chat, { video: { url: url}, caption: 'global.wm', footer: await shortUrl(url), buttons }, { quoted: m })
} catch {
await m.reply('*An Unexpected ERROR occured... Please try later...*')  
}}}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.alias = ['tiktok', 'tikdl', 'tiktokdl', 'tiktoknowm']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
export default handler

async function getInfo(url) {
let id = url.split('?')[0].split('/')
let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json()
return res?.seoProps?.metaParams}
async function shortUrl(url) {
return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()}*/
