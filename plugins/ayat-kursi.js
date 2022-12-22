import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 Ayat Kursi 」*

اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”


It means:
Allah, there is no God (who has the right to be worshiped) but He Who is eternally alive and continuously takes care of (His creatures); not sleepy and not sleeping. To Him belongs what is in the heavens and on earth. No one can intercede with Allah without His permission.
Allah knows what is before them and behind them, and they know nothing from Allah's knowledge except what He wills. Allah's chair covers the heavens and the earth. And Allah does not find it hard to care for both of them, and Allah is Most High, Most Great."
(QS. Al Baqarah: 255)
`.trim()
  m.reply(caption)
}
handler.help = ['ayatkursi']
handler.tags = ['quran']
handler.command = /^(ayatkursi)$/i


export default handler
