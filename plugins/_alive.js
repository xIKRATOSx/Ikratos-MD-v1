import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
  ╭──────[Ikratos-MD-v1]──────╮
  │╭──────────────────────────
  ┴│👋 Hey there, ${conn.getName(m.sender)}!
  ⬡│🤖 I'm Ikratos-MD-v1 and I'm up and running! 🚀
  │╰──────────────────────────
  ┠──────[ BOT INFO ]───────╮
  │╭──────────────────────────
  ┴│ Ikratos-MD-v1
  ⬡│💻 A WhatsApp bot created by:
  ⬡│👨‍💻 Ahmad Ali 🇵🇰
  ⬡│📞 For any inquiries, contact:
  ⬡│📱 wa.me/923470027813
  ⬡│🙅‍♂️ Please don't call the owner or you will be
  ⬡│ ignored or blocked without warning! 😬
  │╰──────────────────────────
  ┠──────[ HOW TO USE ]───────⋆
  ┴│💡 Here are some commands you can use:
  ⬡│🔸 .menu - Shows a list of available commands
  ⬡│🔸 .play - Plays a YouTube video or audio.
  ⬡│🔸 .sticker - Converts an image to a sticker
  ┬│🔸 .translate - Translates text to another language
  │╰───────────────────
  ╰───────────═┅═──────────
  *Thank you for choosing Ikratos-MD-v1! 🌟✨*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler