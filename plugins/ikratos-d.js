import fetch from 'node-fetch'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
 let capt = `*${htki} Dare ${htka}*
 _Please be honest and do your dare_
 
 Whatsapp Bot by Ahmad Ali
 *wa.me/923470027813*
 
 
 Follow me on instagram:\n\t\t\titx_ahmad.ali
 `
let buttons = [{ buttonText: { displayText: 'Truth or Dare' }, buttonId: `${usedPrefix}tod` }]

	let dare = [
   "Demonstrate one of us until someone can guess who is the person being demonstrated.",
   "Tell your best joke in mix language.",
   "Imitate land animals until someone can guess.",
   "prank call and flirt with your bestie.",
   "What is your biggestfear.",
   "Send ss of your recently mobile calls.",
   "Send a voice note to the admin.",
   "Tell a stranger a secret.",
   "Dm your friends keep saying you're like a slut",
   "Dm me your favourite personpic.",
   "Send your tiktok content, which do you think is the best",
   "Say 5 time to Ahmad ali You are not so innocent more than google.",
   "Share your 4 recently pics of your gallery.",
   "Put a statue and write anaya your are my destiny.",
   "For 20 minutes you need to speek English.",
   "Share your favourite contact from your mobile contacts.",
   "Give one of us your phone and let that person send a message to whomever he wants.",
   "Close your eyes and type your name.",
   "Express your feelings for your bestie.",
   "Put a statue with out any privacy and write:\nI am a fool.",
	 "Put a ststus without any privacy and write: Ahmad Ali is innocent more than Google",
	 "Propose the 3rd person in your chat list",
	 "Propose any admin of group (if you are boy propose girl and vise virsa)",
	 "Propose my owner Ahmad Ali without telling him its a dare for 5 hours",
	 "Give ss of your YouTube history.",
	 "Call a random number and sing Happy Birthday.",
	 "copy paste here that you copy last time.",
	 "Chew a green chili without drinking water.",
	 "Only answer yes for a hour.",
   "How was the last person you search on insta.",
   "Sing a song in mix language.",
	 "share your pic.",
   "Tell us your bad habit.", 
   "I dare you to order a pizza for the group.",
   "Share you childhood funny story.",
	 "Send me the screenshot of your last chat with your partner."
]
							 
let msg = await conn.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/BP8RnZf/dare.jpg' }, caption: `${pickRandom(dare)}`, footer: capt, buttons }, { quoted: m })
}

handler.command = /^dare?$/i


export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

