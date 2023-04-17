import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"
import fs from 'fs'
import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({ organization: 'org-uO3fYb1P5QbXpDNRxEw1Awu6', apiKey: global.openAiapi || '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' });
const openai = new OpenAIApi(configuration);
let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
            if (!text) return m.reply(`Chat with AI.\n\nExample:\n${usedPrefix}${command} write a poem for those who copy or steal others codes `);

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
            m.reply("I\'m Facing An Error:"+ error.message);
          }
        }
}
handler.command = /^(ai|openai|gpt)$/i
export default handler