let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `Use example ${usedPrefix}${command} i'm alien?`
    m.reply(`"${[
        'Maybe one day',
        'Not really',
        'Not both',
        'I think not',
        'Yes',
        'Try asking again',
        'There is none'
    ].getRandom()}."`)
}
handler.help = ['clams', 'kerangajaib'].map(v => v + ' <teks>')
handler.tags = ['clams', 'fun']

handler.command = /^(kulit)?kerang(ajaib)?$/i

export default handler
