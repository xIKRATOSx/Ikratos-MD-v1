import fetch from 'node-fetch'
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu =`
${pickRandom(global.bacot)}
`
     const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: '─────〔 𝗕𝗔𝗖𝗢𝗧 〕─────', mimetype: dpdf, fileLength: fsizedoc, pageCount: fpagedoc,
            caption: anu,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '🌎 OFFICIAL GROUP',
                        url: sgc
                    }
                },
                {
                    urlButton: {
                        displayText: '📷 FOLLOW ME',
                        url: sig
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'NEXT',
                        id: '.bacot'
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
}
handler.help = ['bacot']
handler.tags = ['quotes']
handler.command = /^(bacot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bacot = [
'Do you like coffee? I really like it. Do you know why? Coffee is like you, it\'s bitter but it makes you want to drink more.',
'Is the salary the same as before? Usually just a little late.',
'Mr. Haji said, guys who don\'t want to go to Friday prayers are told to wear skirts.',
'Do you know your ex? The ex is like a salary, used to pass by in our lives.',
'I like you, you like him, but unfortunately he is not into you. Wwwwww funny huh? Love is as complicated as this.',
'Google is great isn\'t it? But unfortunately as great as Google is, it can\'t find our soul mate.',
'Holding an eyebrow pencil too often can make the eyes go blind, if stuck in the eyes.',
'I work hard because I realize that money has no legs to make its own way to my pocket.',
'If you can\'t convince and amaze people with your intelligence, confuse them with your stupidity.',
'It\'s tiring to work, it\'s even tiring to be unemployed.',
'We live in a time when if you get angry when you\'re wrong, you\'ll be called tumben when you\'re right.',
'Don\'t you have a girlfriend\'s shoulder? Don\'t worry, there\'s still a shoulder to lean on.',
'It\'s right to love yourself, it\'s wrong to love your father',
'He said he couldn\'t lie. Yes, eyes can only see.',
'Honey in your right hand, poison in your left hand, marriage remains in the hands of God.',
'Cheating doesn\'t happen because there is an intention, cheating happens because your boyfriend is still having sex.',
'If a netizen does thumb exercises on a cell phone without using cooling, the comment will make it hot.',
'Spouse doesn\'t go anywhere, but the competition is everywhere.',
'My feelings are wrong in your eyes. If that\'s the case, tomorrow I\'ll move to your nose.',
'Singles don\'t need to be ashamed, singles don\'t mean they don\'t sell, but no one wants to.',
'If your prayers have not been answered then be patient, remember that you are not the only one praying!',
'I still hope and continue to hope that I will be the champion of hope for a long time.',
'Humans can plan, but in the end the balance also decides.',
'His status is spiritual, his behavior is subtle',
'Failure is not a success.',
'I wanted to eat meatballs, but it\'s so hot, the meatballs look like they have a fever.',
'I was once rich too, salary time',
'I broke up with my boyfriend because we have different beliefs. I\'m sure I\'m handsome, but he\'s not.',
'Your future depends on your dreams, so sleep more.',
'No matter how heavy your work is, it will be lighter if you don\'t carry it.',
'Don\'t get your hopes up! will fall ill later!',
'Remember! You\'re single',
'I don\'t know what to type',
]