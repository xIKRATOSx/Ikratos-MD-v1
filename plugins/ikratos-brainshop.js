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
 import speed from 'performance-now'
 
 let handler = async (m, { conn, text }) => {
     if (!text) {
         return m.reply(`Hey there! ${m.pushName}. How are you doing these days?`);
     }
     let zx = text.length;
     if (zx < 30) {
         let {data} = await axios.get(`
         http://api.brainshop.ai/get?bid=174153&key=aVicUFcROT6Utoyk&uid=[${m.sender.split("@")[0]}]&msg=[${text}]`);
         return m.reply(data.cnt);  
     }
 }
 
 handler.tags = ['tool']
 handler.command = /^(chat)$/i
 
 export default handler
 