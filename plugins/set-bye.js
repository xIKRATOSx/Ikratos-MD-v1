let handler = async (m, { conn, text, isROwner, isOwner }) => {
    if (text) {
    global.db.data.chats[m.chat].sBye = text
    m.reply('*BYE MESSAGE CONFIGURED CORRECTLY FOR THIS GROUP*')
    } else throw `*Entre the Bye message you want to add, \nExample:*\n*- @user (mention)*\n*- Has left the Group*`
    }
    handler.help = ['setbye <text>']
    handler.tags = ['group']
    handler.command = ['setbye'] 
    handler.admin = true
    export default handler