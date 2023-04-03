/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Ikratos-MD-v1
 * @author : xIKRATOSx <https://github.com/xIKRATOSx>
 * @description : Ikratos-MD-v1,A Multi-functional simple and light weight whatsapp bot.
 * @version 1.0.0
 * @file : Ikratos-fancy.js
 **/

 import fancyText from '../lib/fancy.js';

let handler = async (m, { conn, text }) => {
function convertText(text) {
  let fancyTextMessage = '';
  
  for (const style in fancyText) {
    const convertedText = apply(fancyText[style], text);
    fancyTextMessage += convertedText + '\n';
  }

  return `Here's your fancy text:\n${fancyTextMessage}`;
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
}

  handler.help = ['fancy <text>']
  handler.tags = ['tool','maker']
  handler.command = /^(fff)$/i
  export default handler