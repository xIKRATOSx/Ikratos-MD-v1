import translate from '@vitalets/google-translate-api'

let handler = async (m, { args, usedPrefix, command }) => {
	let lang, text
	if (args.length >= 2) {
		lang = args[0] ? args[0] : 'ur', text = args.slice(1).join(' ')
	} else if (m.quoted && m.quoted.text) {
		lang = args[0] ? args[0] : 'ur', text = m.quoted.text
	} else throw `Ex: ${usedPrefix + command} ur hello i am robot`
	let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
	if (!res) throw `Error : Language"${lang}" Not Supported`
	m.reply(`*Language Detected:* ${res.from.language.iso}\n*Go to Language:* ${lang}\n\n*Translation:* ${res.text}`.trim())
}
handler.help = ['translate'].map(v => v + ' <bahasa> <teks>')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i

export default handler
