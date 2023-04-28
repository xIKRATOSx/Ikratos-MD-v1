import fetch from 'node-fetch';

var handler = async (m, { conn }) => {
  conn.reply(m.chat, 'Looking for Joke... Please wait', m);
  let res = await fetch('https://official-joke-api.appspot.com/random_joke');
  if (!res.ok) throw 'Not found';
  let json = await res.json();
  let setup = json.setup;
  let punchline = json.punchline;
  conn.reply(m.chat, `Question: ${setup}\n\nAnswer: ${punchline}`, m);
}

handler.help = ['joke'];
handler.tags = ['internet', 'fun'];
handler.command = /^(joke|lelucon)$/i;

export default handler;