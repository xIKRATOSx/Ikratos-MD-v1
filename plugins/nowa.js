//code by Ahmad Ali | BlackAmda contributed :) 
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let regex = /x/g
    if (!text) throw '⚠️ Enter a number.'
    if (!text.match(regex)) throw `*Example: ${usedPrefix + command} 521999340434x*`

    let random = text.match(regex).length, total = Math.pow(10, random), array = []
    for (let i = 0; i < total; i++) {
        let list = [...i.toString().padStart(random, '0')]
        let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net'

        if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
            let info = await conn.fetchStatus(result).catch(_ => { })
            array.push({ exists: true, jid: result, ...info })
        } else {
            array.push({ exists: false, jid: result })
        }
    }

    // * Filtering only numbers in exists WhatsApp.
    const arrayFiltered = []
    array.filter(v => v.exists).forEach((v) => {
        arrayFiltered.push(v)
    });

    // * Filtered array sorting by date of bio setAt.
    const arraySorted = arrayFiltered.sort(function (x, y) {
        return new Date(y.setAt) - new Date(x.setAt);
    });

    let txt = 'Registered\n\n' + arraySorted.filter(v => v.exists).map(v => `• Number: wa.me/${v.jid.split('@')[0]}\n*• Bio:* ${v.status || 'No Description'}\n*• Date:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*Non Registered*\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n')
    m.reply(txt)
}
handler.command = /^nowa$/i
export default handler
function formatDate(n, locale = 'id') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, { timeZone: 'Asia/Karachi' })
}
    