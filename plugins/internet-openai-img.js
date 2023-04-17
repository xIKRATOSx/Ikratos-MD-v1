import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({ organization: 'org-uO3fYb1P5QbXpDNRxEw1Awu6', apiKey: global.AIimg || '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'});
const openaiii = new OpenAIApi(configuration);
let handler = async (m, { conn, text, command }) => {

            if (!text) throw (`Create an image from AI.\n\nExample:\n.aiimage Wooden house on snow mountain`);
            await m.reply(wait)
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "1024x1024",
            });
conn.sendButtonImg(m.chat, response.data.data[0].url, 'Done', wm, 'Menu', '.m', m)
}
handler.help = ['ai-image']
handler.tags = ['internet']
handler.command = /^(dalle|aiimg|aiimage|ai-img|openaiimage|ai-image)$/i
handler.limit = true 
export default handler