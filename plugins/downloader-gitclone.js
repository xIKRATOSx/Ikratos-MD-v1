const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
var handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `Example use ${usedPrefix}${command} xIKRATOSx|Ikratos-MD-v1`
    if (!regex.test(args[0])) throw 'Url Is Not Valid! '
    let [_, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    m.reply(`D o w n l o a d i n g. . .`)
    conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /gitclone/i

handler.limit = true

export default handler
