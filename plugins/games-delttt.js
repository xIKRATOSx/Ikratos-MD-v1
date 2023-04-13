let handler = async (m, { conn, text }) => {
	conn.game = conn.game ? conn.game : {}
	try {
		if (conn.game) {
			delete conn.game
			conn.reply(m.chat, `*The room was successfully deleted*`, m)
		} else if (conn.game) {
			m.reply(`*The room does not exist*\n\n*Check that you have set the room correctly*`)
		} else throw '?'
	} catch (e) {
		m.reply('spoiled')
	}
}
handler.help = ['delttt']
handler.tags = ['game']
handler.command = /^(delsesittt|dellsesitt|delttt|deltictactoe)$/i
handler.fail = null

export default handler