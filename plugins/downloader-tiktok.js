import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let res = (await axios.get(API('males', '/tiktok2', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
    conn.sendHydrated(m.chat, 'How to save in the gallery:\n1. Download the video first\n2. Open and click the 3 dots in the upper right corner\n3. then click save!', `*Title:* ${res.title}\n${res.author ? `*Video Maker:* ${res.author}` : '\n' }`.trim(), res.video, sgh, '𝙼𝚢 𝙶𝚒𝚝𝚑𝚞𝚋 ❤', null, null, ['Audio', '.toaudio'], ['Donasi', '.donasi'], fakes, adReply)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(dl)?)$/i

export default handler
