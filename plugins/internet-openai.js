import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"
import fs from 'fs'
import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({ organization: global.org, apiKey: global.openAiapi});
const openai = new OpenAIApi(configuration);
let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
  if (global.openAiapi === "PASTE_YOUR_API_HERE")
            return m.reply('Please add your _API_ key in *config.js* file')
    if (global.org === "PASTE_YOUR_ORG_HERE")
            return m.reply('Please add your _ORG_ key in *config.js* file') 
            if (!text) return m.reply(`Chat with AI.\n\nExample:\n${usedPrefix}${command} write a poem for those who copy or steal others codes `);
            await conn.reply(m.chat, `Please wait, I\'m processing your request.\nIt may take 1-2 min so be paitent.\n\n${fig}`, m)

            const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: text}],
          });
          m.reply(`⚛Response By ChatGPT Model *gpt-3.5-turbo*\n\n${response.data.choices[0].message.content}\n\n${footerTXT}`);
          } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("I\'m Facing An Error:"+ error.message);
          }
        }
}
handler.command = /^(ai|openai|gpt)$/i
export default handler