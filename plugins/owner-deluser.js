let handler = async (m, { conn, usedPrefix, command, text }) => {
	function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

	text = no(text)

  if(isNaN(text)) {
		var number = text.split`@`[1]
  } else if(!isNaN(text)) {
		var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `where is the number?\nexample: *${usedPrefix}${command} ${global.owner[0]}*\n@tag/reply user`, m)
  //let exists = await conn.isOnWhatsApp(number)
  // if (exists) return conn.reply(m.chat, `*The target number is not registered on WhatsApp*`, m)
  if(isNaN(number)) return conn.reply(m.chat, `The number you entered is invalid!`, m)
  if(number.length > 15) return conn.reply(m.chat, `The number you entered is invalid`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
	let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
        let participants = m.isGroup ? groupMetadata.participants : []
	let users = m.isGroup ? participants.find(u => u.jid == user) : {}
	let number = user.split('@')[0]
	delete global.db.data.users[user]
        let pp = await conn.profilePictureUrl(number+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
        let anu = `☑️ Successfully deleted *${conn.getName(number + '@s.whatsapp.net')}* from *DATABASE*`
 	conn.sendHydrated(m.chat, anu, wm, pp, null,null, number, '🌹 BYE USERS', [[null,null],[null,null],[null,null]], m, {mentions: [number+'@s.whatsapp.net']})
  }
}
handler.help = ['deleteuser']
handler.tags = ['owner']
handler.command = /^(d(el)?(ete)?u(ser)?|ha?pu?su(ser)?)$/i

handler.rowner = true

export default handler