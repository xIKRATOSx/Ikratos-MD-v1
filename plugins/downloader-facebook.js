import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `*Where is the link, Example: ${usedPrefix + command}* https://fb.watch/fOTpgn6UFQ/` 
if (!args[0].match(/www.facebook.com|fb.watch/g)) throw `*Where is the link, Example: ${usedPrefix + command}* https://fb.watch/fOTpgn6UFQ/`
try {
await m.reply(`*Please wait downloading your video, It will take 2 - 10 min depending on the size of your videoᴏ...*`)
switch (command) {   
case "facebook3": case "fb3": case "facebookdl3": case "fbdl3":                                  
let res = await fbDownloader(args[0])
for (let result of res.download) {
let ur = result.url    
await conn.sendFile(m.chat, ur, 'error.mp4', '*HERE IS YOUR VIDEO \n\n「 ɪᴋʀᴀᴛᴏs-ᴍᴅ-ᴠ𝟷 」*', m)}
break           
case "facebook2": case "fb2": case "facebookdl2": case "fbdl2":           
let ress = await fg.fbdl(args[0])
let urll = await ress.data[0].url    
await conn.sendFile(m.chat, urll, 'error.mp4', '*HERE IS YOUR VIDEO \n\n「 ɪᴋʀᴀᴛᴏs-ᴍᴅ-ᴠ𝟷 」*', m) 
break
case "facebook": case "fb": case "facebookdl": case "fbdl":        
let vio = await fetch(`https://api.violetics.pw/api/downloader/facebook?apikey=beta&url=${args[0]}`)  
let vioo = await vio.json()
let videovio = `${vioo.result.hd.url || vioo.result.sd.url}`
await conn.sendFile(m.chat, videovio, `error.mp4`, '*HERE IS YOUR VIDEO \n\n「 ɪᴋʀᴀᴛᴏs-ᴍᴅ-ᴠ𝟷 」*', m)
break   
case "facebook4": case "fb4": case "facebookdl4": case "fbdl4":           
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) await conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, '*HERE IS YOUR VIDEO \n\n「 ɪᴋʀᴀᴛᴏs-ᴍᴅ-ᴠ𝟷 」*', m)
break          
case "facebook5": case "fb5": case "facebookdl5": case "fbdl5":        
let res3 = await fetch(`https://latam-api.vercel.app/api/facebookdl?apikey=brunosobrino&q=${args[0]}`)  
let json = await res3.json()
let url3 = await json.video
await conn.sendFile(m.chat, url3, 'error.mp4', '*HERE IS YOUR VIDEO \n\n「 ɪᴋʀᴀᴛᴏs-ᴍᴅ-ᴠ𝟷 」*', m)     
break    
}} catch {
await await m.reply(`*Error, Please try these commands: (${usedPrefix}fb, ${usedPrefix}fb2, ${usedPrefix}fb3, ${usedPrefix}fb4, ${usedPrefix}fb5)*`)
}}
handler.tags = ['downloader']
handler.command = /^(facebook|fb|facebookdl|fbdl|facebook2|fb2|facebookdl2|fbdl2|facebook3|fb3|facebookdl3|fbdl3|facebook4|fb4|facebookdl4|fbdl4|facebook5|fb5|facebookdl5|fbdl5)$/i
export default handler
