import fetch from 'node-fetch'

import { sticker } from '../lib/sticker.js'


let handler = async (m, { conn, text, usedPrefix, command }) => {

let ok = ['https://telegra.ph/file/f61a7c96f3f86b6c5214f.png','https://telegra.ph/file/940c0ec03708783fb0f6b.jpg','https://telegra.ph/file/f1a58e11e5921a9be4af8.jpg','https://telegra.ph/file/3f32b5d92543e53d6175f.jpg','']
let stiker = await sticker(false, ok, global.packname, global.author)
  conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

export default handler