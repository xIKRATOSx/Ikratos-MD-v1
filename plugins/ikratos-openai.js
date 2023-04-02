/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Ikratos-MD-v1
 * @author : xIKRATOSx <https://github.com/xIKRATOSx>
 * @description : Ikratos-MD-v1,A Multi-functional simple and light weight whatsapp bot.
 * @version 1.0.0
 * @file : Ikratos-openai.js
 **/

 import axios from 'axios'
 import { Configuration, OpenAIApi } from "openai"

 let handler = m => m
 
 handler.all = async function (m) {
   let chat = global.db.data.chats[m.chat]
 
   if (m.fromMe) return; // ignore messages sent by the bot itself
   if (chat.chatgpt && m.quoted && m.quoted.fromMe && m.quoted.id && !chat.isBanned) try {
     const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: text}],
          });
          m.reply(`${response.data.choices[0].message.content}`);
   } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      console.log(`${error.response.status}\n\n${error.response.data}`);
    } else {
      console.log(error);
      m.reply("Please Wait I'm Getting API update rn... Please Try Later :"+ error.message);
    }
  }
 
   return !0;
 }

 export default handler;
 