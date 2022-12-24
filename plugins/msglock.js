let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `uhm.. where is the text?\n\nexample:\n${usedPrefix + command} tes`
    let msgs = global.db.data.msgs
    if (!(text in msgs)) return await conn.sendButton(m.chat, `'${text}' not registered!`, wm, null, [['register all messages', '.listall']], m)
    msgs[text].locked = !/^un/i.test(command)
    m.reply('successfully locked!')
}
    handler.rowner = true
    handler.help = ['un', ''].map(v => v + 'lockmsg <teks>')
    handler.tags = ['database']
    handler.command = /^(un)?lock(vn|msg|video|audio|img|stic?ker|gif)$/i

export default handler