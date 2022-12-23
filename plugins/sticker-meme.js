import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `reply picture with command\n\n${usedPrefix + command} <${atas ? atas : 'top text'}>|<${bawah ? bawah : 'bottom text'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} not supported!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    let stiker = await sticker(false, meme, global.packname, global.author)
    if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, '', { asSticker: 1 })
}
handler.help = ['smeme <teks atas>|<teks bawah>']
handler.tags = ['tools']
handler.command = /^(smeme)$/i

handler.limit = true

export default handler