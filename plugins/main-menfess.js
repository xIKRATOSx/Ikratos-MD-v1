let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.menfess = conn.menfess ? conn.menfess : {}
    if (!text) throw `*Method of use :*\n\n${usedPrefix + command} number|sender name|message\n\n*Note:* The sender\'s name can be a pseudonym or anonymous.\n\n*Example:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Anonymous|Hai.`;
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `*Method of use :*\n\n${usedPrefix + command} number|sender name|message\n\n*Note:* The sender\'s name can be a pseudonym or anonymous.\n\n*Example:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Anonymous|Hai.`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw 'The number is not registered on whatsapp.';
    if (jid == m.sender) throw 'can\'t send menfess messages to yourself.'
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    if (mf) return !0
    try {
    	let id = + new Date
        let tek = `Hai @${data.jid.split('@')[0]}, You received this message from Menfess.\n\nFrom: *${name}*\nOrder: \n${pesan}\n\nDo you want to reply to this message? how can it be, sister? just type sister\'s message and send it, I\'ll tell you later *${name}*.`.trim();
        let imgr = flaaa.getRandom()
        await conn.sendButton(data.jid, bottime, tek, `${imgr + 'Menfess'}`, [['REPLY TO MESSAGE', '.balasmenfess']], fakes)
        .then(() => {
            m.reply('Successfully sent a menfess message.')
            conn.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
    } catch (e) {
        console.log(e)
        m.reply('eror');
    }
}
handler.tags = ['main']
handler.help = ['menfess', 'menfes'].map(v => v + ' <nomor|nama pengirim|pesan>')
handler.command = /^(menfess|menfes)$/i
handler.private = true

export default handler

/* Made By FokusDotId (Fokus ID)
 * https://github.com/FokusDotId
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6281320170984
*/
