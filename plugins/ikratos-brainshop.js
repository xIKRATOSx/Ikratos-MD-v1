/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Ikratos-MD-v1
 * @author : xIKRATOSx <https://github.com/xIKRATOSx>
 * @description : Ikratos-MD-v1,A Multi-functional simple and light weight whatsapp bot.
 * @version 1.0.0
 * @file : Ikratos-brainshop.js
 **/

 import axios from 'axios'

 let handler = m => m
 
 handler.all = async function (m) {
   let chat = global.db.data.chats[m.chat]
 
   if (m.fromMe) return; // ignore messages sent by the bot itself
   if (chat.autochat && m.quoted && m.quoted.fromMe && m.quoted.id && !chat.isBanned) {
     let text = m.text || m.quotedMsg && m.quotedMsg.body;  
     if (text) {
       let zx = text.length;
       if (zx < 30) {
         let { data } = await axios.get(`http://api.brainshop.ai/get?bid=174153&key=aVicUFcROT6Utoyk&uid=[${m.sender.split("@")[0]}]&msg=[${text}]`);
         this.sendPresenceUpdate('typing', m.chat) 
         return m.reply(data.cnt);
       }
     }  
   }
 
   return !0;
 }

 export default handler;
 