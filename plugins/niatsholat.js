let handler = async (m) => {
    let niatsolat = JSON.stringify(global.niatsolat)
    let json = JSON.parse(niatsolat)
    let data = json.result.data.map((v, i) => `${i + 1}. ${v.niat}\n${v.arabic}\n${v.latin}\n${v.translation_id}`).join('\n\n')
   const contoh = `*Prayer intention*\n\n`
   const anjuran = `\n\nAn act of worship will be accepted if it fulfills two things, namely the intention and example of Rasulullah saw: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ ...[رواه البخاري ومسلم]رَ"
   Meaning: "Indeed (the validity) of charity depends on the intention ... [Hadith Narrated by al-Bukhari and Muslim]".`
    m.reply(contoh + data + anjuran)
}
handler.help = ['niatsholat']
handler.tags = ['quran']
handler.command = /^(niatsh[ao]lat|prayerint)$/i
handler.register = false
export default handler

global.niatsolat = {
    "result": {
        "data": [
            {
                "index": "1",
                "niat": "Morning Prayer Intention",
                "arabic": "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
                "latin": "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
                "translation_id": "I intend to pray two rak'ats at dawn facing the Qiblah for the sake of Allah Ta'ala"
            },
            {
                "index": "2",
                "niat": "Dhuhur prayer intention",
                "arabic": "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
                "latin": "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
                "translation_id": "I intend to pray four rak'ats facing the Qibla for the sake of Allah Ta'ala"
            },
            {
                "index": "3",
                "niat": "Intention of Ashar Prayer",
                "arabic": "اُصَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
                "latin": "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala", 
                "translation_id": "میں نے ارادہ کیا ہے کہ عصر کی چار رکعت نماز قبلہ کی طرف اللہ تعالیٰ کی رضا کے لیے پڑھوں۔"
            },
            {
                "index": "4",
                "niat": "Intention of Maghrib Prayer",
                "arabic": "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
                "latin": "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
                "translation_id": "میرا ارادہ ہے کہ تین رکعت فرض مغرب کی نماز قبلہ کی طرف اللہ تعالیٰ کی رضا کے لیے پڑھوں"
            },
            {
                "index": "5",
                "niat": "Isha prayer intention",
                "arabic": "اُصَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
                "latin": "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
                "translation_id": "میں عشاء کی فرض چار رکعت قبلہ کی طرف اللہ تعالیٰ کی رضا کے لیے پڑھنے کا ارادہ رکھتا ہوں"
            }
        ]
    }
}
