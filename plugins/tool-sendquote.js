async function handler(m) {
    if (!m.quoted) throw 'reply messsage!'
    let q = await m.getQuotedObj()
    if (!q.quoted) throw 'The message you replied to does not contain a reply!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.command = /^q$/i

export default handler