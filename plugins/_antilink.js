let linkRegex = /(chat.whatsapp.com|whatsapp.com|xnxx.com|xvideos.com|pornhub.com)\/([0-9A-Za-z]{1,99999})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*Hey!! The antilink is active, but to save you honey you are admin😎*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await m.reply(`*「 ANTI LINKS 」*\n\n*Hasta la vista baby 👋, ${await this.getName(m.sender)} you broke the group rules you will be removed...!!*`)

if (!isBotAdmin) return m.reply('*I\'ll save you baby, I\'m not an admin I can\'t remove you*')  
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
await this.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.id }})
} else if (!bot.restrict) return m.reply('*the owner of the bot have activated the restriction,Use command (disable restrict) or contact him to disable them*')
}
return !0
}
