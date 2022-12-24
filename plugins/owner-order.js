let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `if you find an error message, report it using this command\n\nexample:\n${usedPrefix + command} good afternoon owner, I found the following error <copy/tag the error message>`
    if (text.length < 1 ) throw `The report is too short, minimum 10 characters!`
    if (text.length > 1000) throw `The report is too long, maximum 1000 characters!`
    let teks = `*${htki} ${command.toUpperCase()} ${htka}*\n📮 : ${text}\n*- @${m.sender.split`@`[0]}*`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply('☑️ The message has been sent to the owner!\n_*Waiting for confirmation from the owner...*_')
}
handler.command = /^(order)$/i
export default handler