let handler = async (m, { conn, text }) => {

let [number, pesan, jumlah] = text.split('|')
if (!number) throw '*[ ⚠️ ] PLEASE ENTER THE NUMBER THAT WILL BE SPAMED IN THE MESSAGE!*\n*CORRECT USE:*\n*—◉ #spamwa number|text|amount*\n*amount:*\n*—◉ #spamwa 5219999999999|hai :v|25*'
if (!pesan) throw '*[ ⚠️ ] PLEASE PUT A MESSAGE TO SPAM!*\n*USE CORRECT:*\n*—◉ #spamwa number|text|amount*\n*XAMPLE:*\n*—◉ #spamwa 5219999999999|merespons :v|25*'
if (jumlah && isNaN(jumlah)) throw '*[ ⚠️ ] QUANTITY MUST BE A NUMBER!*\n*PROPER USE:*\n*—◉ #spamwa umber|text|amount*\n*EXAMPLE:*\n*—◉ #spamwa 5219999999999|merespons :v|25*'

let fixedNumber = number.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw '*[ ⚠️ ] TOO MANY MESSAGES! QUANTITY MUST BE LESS THAN _50_ MESSAGES*️'
await m.reply(`*[❗] SPAM MESSAGE TO NUMBER ${number} WAS SUCCESSFULLY DONE*\n*NUMBER SENT:*\n*—◉ ${fixedJumlah} time(s)!*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['tools']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.private = true
handler.limit = true
export default handler
