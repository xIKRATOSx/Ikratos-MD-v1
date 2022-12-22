import { alquran } from '@bochilteam/scraper'
let handler = async (m, { args, usedPrefix, command }) => {
    if (!(args[0] || args[1])) throw `example:\n${usedPrefix + command} 1 2\n\nthen the result is sura Al-Fatihah verse 2 along with the audio, & only 1 verse`
    if (isNaN(args[0]) || isNaN(args[1])) throw `example:\n${usedPrefix + command} 1 2\n\nthen the result is sura Al-Fatihah verse 2 along with the audio, just 1 verse`
    let api = await alquran()
    let mes = `
${api[args[0] - 1].ayahs[args[1] - 1].text.ar}
    
${api[args[0] - 1].ayahs[args[1] - 1].translation.id}
( Q.S ${api[args[0] - 1 ].asma.id.short} : ${api[args[0] - 1].ayahs[args[1] - 1].number.insurah} )
`.trim()
    m.reply(mes)
    conn.sendFile(m.chat, api[args[0] - 1].ayahs[args[1] - 1].audio.url, '', '', m)
}

handler.help = ['alquran']
handler.tags = ['quran']
handler.command = ['alquran']

export default handler
