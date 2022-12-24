let handler = async (m, { conn, usedPrefix, command }) => {
    let which = command.replace(/list/i, '')
    let msgs = global.db.data.msgs
    let split = Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })
    let fltr
    if (/all/i.test(command)) fltr = split
    if (/audio/i.test(command)) fltr = split
        .filter(v => v.message.audioMessage)
        .filter(m => m.message.audioMessage.ptt == false)
    if (/doc/i.test(command)) fltr = split.filter(v => v.message.documentMessage)
    if (/vn/i.test(command)) fltr = split
        .filter(v => v.message.audioMessage)
        .filter(m => m.message.audioMessage.ptt == true)
    if (/video/i.test(command)) fltr = split
        .filter(v => v.message.videoMessage && !v.message.videoMessage.gifPlayback)
    if (/gif/i.test(command)) fltr = split
        .filter(v => v.message.videoMessage)
        .filter(m => m.message.videoMessage.gifPlayback)
    if (/stic?ker/i.test(command)) fltr = split.filter(v => v.message.stickerMessage)
    if (/msg/i.test(command)) fltr = split.filter(v => v.message.conversation)
    if (/img/i.test(command)) fltr = split.filter(v => v.message.imageMessage)
    let list = fltr.map(v => `├ ${v.nama} ${v.locked ? '(🔒)' : ''}`).join('\n')
    if (list === '') throw 'no'
    if (global.db.data.chats[m.chat].getmsg) return await m.reply(`
┌「 *message list* 」
${list}
└────

direct access by typing the name
`.trim())
    else return await conn.sendButton(m.chat, `
┌「 *order list* 」
${list}
└────

access with:
*${usedPrefix}get${which}* <name>

or directly type his name, but you must activate get message by clicking the button below
`.trim(), wm, null, [['turn on getmsg', '.on getmsg']], m)
}
handler.help = ['all', 'doc', 'vn', 'msg', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^(daftar|list)(all|vn|doc|msg|video|audio|img|stic?ker|gif)$/

export default handler