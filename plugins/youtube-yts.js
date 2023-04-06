/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Ikratos-MD-v1
 * @description : Ikratos-MD-v1,A Multi-functional simple and light weight whatsapp bot.
 * @version 1.0.0
 * @file : youtube-yts.js
 **/
 import { youtubeSearch } from '@bochilteam/scraper'

 let handler = async(m, { conn, usedPrefix, text, args, command }) => {
 let name = await conn.getName(m.sender)
 
   if (!text) throw `Where is the text?\nExample; *${usedPrefix + command}* arcade`
   let cari = await youtubeSearch(`${text}`)
     let dapet = cari.video
     let listSections = []
   Object.values(dapet).map((v, index) => {
   listSections.push([index + ' ' + cmenub + ' ' + v.title, [
           ['Video🎧', usedPrefix + 'ytmp4 ' + v.url , '\n⌚ *Duration:* ' + v.durationH + '\n⏲️ *Uploaded:* ' + v.publishedTime + '\n👁️ *Views:* ' + v.view + '\n📎 *Url:* ' + v.url],
           ['Audio 🎧', usedPrefix + 'ytmp3 ' + v.url + ' yes', '\n⌚ *Duration:* ' + v.durationH + '\n⏲️ *Uploaded:* ' + v.publishedTime + '\n👁️ *Views:* ' + v.view + '\n📎 *Url:* ' + v.url]
         ]])
   })
   return conn.sendList(m.chat, '*───「 Youtube Search 」───*', `Silahkan pilih type di bawah...\n*Teks yang anda minta:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `YouTube Search 🔎`, listSections, m)
 }
 handler.help = ['ytsearch <query>']
 handler.tags = ['internet']
 handler.command = /^yts(earch)?$/i
 
 
 export default handler
 




















/*import { youtubeSearch } from '@bochilteam/scraper';
import { WAConnection } from '@adiwajshing/baileys';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  let name = await conn.getName(m.sender);
  if (!text) throw `Where is the text?\nExample: *${usedPrefix + command}* arcade`;

  let cari = await youtubeSearch(`${text}`);
  let dapet = cari.video;
  let resultText = '';

  Object.values(dapet).map((v, index) => {
    resultText += `${index + 1}. ${v.title}\n*Duration:* ${v.durationH}\n*Url:* ${v.url}\n____________\n\n`;
  });

  let message = `*───「 Youtube Search 」───*\n\nPlease select the number of the video you want to download by replying to this message with the number listed.\n*Text you requested:* ${text}\n\nRetype *${usedPrefix + command}* your text to change the text Again\n\n${resultText}`;
  conn.reply(m.chat, message, m);

  try {
    const response = await conn.waitForMessage(m.chat, m.sender, 60000); // wait for a message for up to 1 minute
    if (response.quoted && response.quoted.fromMe && response.quotedMsg.body && !isNaN(response.quotedMsg.body)) {
      let selectedResult = parseInt(response.quotedMsg.body);
      if (!selectedResult || selectedResult < 1 || selectedResult > dapet.length) return;
      let selectedVideo = dapet[selectedResult - 1];
      let commandText = `yta ${selectedVideo.url}`;
      let commandMessage = `Downloading audio of video "${selectedVideo.title}" Your Command: *${usedPrefix}${commandText}*.`;
      conn.reply(m.chat, commandMessage, m);
    }
  } catch (e) {
    console.log('Error:', e); // handle the error
  }
};

handler.help = ['ytsearch <query>'];
handler.tags = ['internet'];
handler.command = /^yts(earch)?$/i;

export default handler;
*/