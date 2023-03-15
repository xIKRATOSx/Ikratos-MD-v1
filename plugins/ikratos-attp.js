import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
import { MessageType } from '@adiwajshing/baileys'

let handler = async (m, { conn, text }) => {
 try {
     let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
     let url = await fetch(global.API('https://salism3api.pythonanywhere.com','/text2gif/',{text: teks}))
     res = await url.json()
     stick = res.image
     let stiker = await sticker(null, stick, global.packname, global.author)
     conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('Conversion Failed')
   throw false
  }
}
handler.help = ['attp125']
handler.tags = ['sticker']
handler.command = /^(attp125)$/i
//Made By Anshul
export default handler
