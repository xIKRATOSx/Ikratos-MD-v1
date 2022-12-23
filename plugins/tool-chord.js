import axios from 'axios'

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, 'Examples of use: ' + usedPrefix + 'chords just miss', m)
    axios.get(`https://docs-jojo.herokuapp.com/api/chord?q=` + text)
        .then((res) => {
          let hasil = `*• Chord Lagu ${text} :*\n${res.data.result}`
            conn.reply(m.chat, hasil, m)
        })
        .catch(_ => m.reply('Chord Song Not Found!'))
}
handler.help = ['chord <judul lagu>']
handler.tags = ['tools']
handler.command = /^(chord)$/i
handler.limit = true

export default handler 
