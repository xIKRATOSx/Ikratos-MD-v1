/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Ikratos-MD-v1
 * @author : xIKRATOSx <https://github.com/xIKRATOSx>
 * @description : Ikratos-MD-v1,A Multi-functional simple and light weight whatsapp bot.
 * @version 1.0.0
 * @file : Ikratos-fancy2.js
 **/

import { a001, a002, a003, a004, a005, a006, a007, a008, a009, a010, a011, a012, a013, a014, a015, a016, a017, a018, a019, a020, a021, a022, a023, a024, a025, a026, a027, a028, a029, a030, a031, a032, a033, a034, a035, a036, a037, a038, a039, a040, a041, a042, a043, a044, a045 } from '../lib/fancy-inc.js';

let handler = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) throw `Where is the text?` 

const fancyText = [ a001, a002, a003, a004, a005, a006, a007, a008, a009, a010, a011, a012, a013, a014, a015, a016, a017, a018, a019, a020, a021, a022, a023, a024, a025, a026, a027, a028, a029, a030, a031, a032, a033, a034, a035, a036, a037, a038, a039, a040, a041, a042, a043, a044, a045 ];
const fancyResult = convertText(text, fancyText);
conn.sendMessage(m.chat, fancyResult, m);

}
handler.help = ['nnn <text>']
handler.tags = ['tool','maker']
handler.command = /^(nnn)$/i
export default handler


function convertText(text) {
    let fancyResult = '';
  
    for (const style in fancyText) {
      const convertedText = apply(fancyText[style], text);
      fancyResult += `${style}: ${convertedText}\n\n`;
    }
  
    return `Here's your fancy text:\n\n${fancyResult.trim()}`;
  }
  

function apply(map, text) {
    let result = '';
    for (const character of text.split('')) {
      if (map[character] !== undefined) {
        result += map[character];
      } else if (map[character.toLowerCase()] !== undefined) {
        result += map[character.toLowerCase()];
      } else {
        result += character;
      }
    }
    return result;
  }