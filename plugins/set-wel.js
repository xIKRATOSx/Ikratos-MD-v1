let handler = async (m, { conn, text, isROwner, isOwner }) => {
    if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('*WELCOME MESSAGE CONFIGURED CORRECTLY FOR THIS GROUP*')
    } else throw `*Entre the welcome message you want to add, \nExample:*\n*- @user (mention)*\n*- @group (name of group)*\n*- @desc (description of group)*`
    }
    handler.help = ['setwelcome <text>']
    handler.tags = ['group']
    handler.command = ['setwelcome'] 
    handler.admin = true
    export default handler