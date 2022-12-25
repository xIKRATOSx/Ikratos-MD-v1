let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw `uhm.. where is the text?\n\nexample:\n${usedPrefix + command} test`
    let msgs = global.db.data.msgs
    if (!text in msgs) throw `'${text}' not registered!`
    delete msgs[text]
    m.reply(`successfully deleted message with name '${text}'`)
}
handler.help = ['msg'].map(v => 'del' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^(-|del)(all|vn|msg|video|audio|img|stic?ker|gif)$/

export default handler