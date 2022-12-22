const delay = time => new Promise(res => setTimeout(res, time))
export async function before(m) {
	if (!m.chat.endsWith('@s.whatsapp.net')) return !0;
	this.menfess = this.menfess ? this.menfess : {}
	let mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender)
	if (!mf) return !0
	console.log({ text: m.text, type: m.quoted?.mtype })
	if ((m.text === 'REPLY MESSAGE' || m.text === '') && m.quoted.mtype == 'buttonsMessage') return m.reply("Please send your reply message.\nType a message and then send it, then the message automatically goes to the message reply target.");
	else {
		let imgr = flaaa.getRandom()
		let txt = `Hai kaka @${mf.dari.split('@')[0]}, you received this reply.\n\nThe message you sent earlier:\n${mf.pesan}\n\nReply message:\n${m.text}\n`.trim();
		await this.sendButton(mf.dari, bottime, txt, `${imgr + 'Menfess'}`, [['REPLY MESSAGE', '.balasmenfess']], null).then(() => {
			m.reply('Successfully Sent reply.')
			delay(1500)
			delete this.menfess[mf.id]
			return !0
		})
	}
	return !0
}
/* Made By FokusDotId (Fokus ID)
 * https://github.com/FokusDotId
*/
