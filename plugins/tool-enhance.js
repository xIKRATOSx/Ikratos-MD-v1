import fetch from 'node-fetch'
import FormData from 'form-data'

let handler = async (m) => {

try {
 await m.reply('Currently making...')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Where is the picture?'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `The ${mime} type is not supported!`
  let img = await q.download()
  let body = new FormData
  body.append('image', img, 'image')
  let res = await fetch('http://max-image-resolution-enhancer.codait-prod-41208c73af8fca213512856c7a09db52-0000.us-east.containers.appdomain.cloud/model/predict', {
    method: 'POST',
    body
  })
  if (res.status !== 200) throw await res.json()
  await conn.sendFile(m.chat, await res.buffer(), 'Enhance.jpg', 'Here sis', m)
} catch (e) {
  m.reply('There\'s an error!')
 }
}
handler.help = ['enhance']
handler.tags = ['tools']
handler.command = /^enhance$/i

export default handler
