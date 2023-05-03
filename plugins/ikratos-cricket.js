//created by souravkl11 updated by xIKRATOSx
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (global.cricket_URL === undefined) return await m.reply('_No matchs found. Set cricket_URL in config vars!_')
var data = await axios.get(`https://crickbuzz.vercel.app/score?url=${global.cricket_URL}&timestamp=`+new Date());
var msg = '';
if (data.title) msg += data.title + `\n`
if (data.update) msg += `*`+data.update + `*\n\n`
if (data.current) msg += '*'+data.current + `*\n`
if (data.batsman) msg += `Batsman 🏏: *${data.batsman} - ${data.batsmanrun} ${data.ballsfaced}\n`
if (data.sr) msg +=`Strike rate: ${data.sr}\n`
if (data.batsman) msg +=`Batsman 2 🏏: *${data.batsmantwo}* - ${data.batsmantworun} ${data.batsmantwoballsfaced}\n`
if (data.batsman) msg += `Strike rate: ${data.batsmantwosr}\n\n`
if (data.batsman) msg += `Bowler ⚾: *${data.bowler}*\n`
if (data.batsman) msg +=`Over: ${data.bowlerover}\n`
if (data.batsman) msg += `Runs: ${data.bowlerruns}\n`
if (data.batsman) msg +=`Wickets: ${data.bowlerwickets}\n`
if (data.batsman) msg+=`Bowler 2: ${data.bowlertwo}\n\n`
if (data.batsman) {
msg += `${data.recentballs}\n\n`
msg += `Last wicket ❌ ${data.lastwicket}\n`
msg += `Run rate %: *${data.runrate}*\n`
}
await m.reply('*Live score updating... 🏏🏏*');
await m.reply(msg);
}
handler.command = /^score?$/i

export default handler



//incomplete project
/*import { getCricketScore, getScoreCard } from "../lib/cricket.js";

let handler = async(m, { conn, command, text, usedPrefix }) => {
  let { groupDesc, reply } = msgInfoObj;
  const descErrorMessage = `❌ ERROR
- Group description is empty.
- Put match ID in starting of group description. 
- Get match ID from cricbuzz today match url.
- example: https://www.cricbuzz.com/live-cricket-scores/37572/mi-vs-kkr-34th-match-indian-premier-league-2021 
- so match ID is 37572 !
# If you've put correct match ID in description starting and still facing this error then contact developer wa.me/923470027813\nwa.me/19293514545`;

  if (!groupDesc) {
    await m.reply(descErrorMessage);
    return;
  }

  let matchId = groupDesc.slice(0, 5);
  if (isNaN(Number(matchId))) {
    await m.reply(descErrorMessage);
    return;
  }
try {
  let response = await getCricketScore(matchId);
  await conn.sendMessage(m.chat, { text: response }, { quoted: m });
} catch {
  let response2 = await getScoreCard(matchId);
  await conn.sendMessage(m.chat, { text: response2 }, { quoted: m });
}
}
handler.command = /^score1$/i*/