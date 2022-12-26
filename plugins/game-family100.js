import { family100 } from '@bochilteam/scraper'
const winScore = 4999
async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        this.reply(m.chat, 'There are still unanswered quizzes in this chat', this.game[id].msg)
        throw false
    }
    const json = await family100()
    let caption = `
*Question:* ${json.soal}
Be found *${json.jawaban.length}* answer${json.jawaban.find(v => v.includes(' ')) ? `
(some answers have spaces)
`: ''}
+${winScore} XP for every correct answer
    `.trim()
    this.game[id] = {
        id,
        msg: await this.sendButton(m.chat, caption, author, null, [['Give up', 'nyerah']], m),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    }
}
handler.help = ['family100']
handler.tags = ['game']
handler.command = /^family100$/i

export default handler