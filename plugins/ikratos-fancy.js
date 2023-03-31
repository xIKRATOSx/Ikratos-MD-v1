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

 import { listall, tiny, fancytext } from '../lib/index.js';


 let handler= async(m, {conn, text}) => {
    if (isNaN(text.split(" ")[0]) || !text) {
      let text = tiny(
        "Fancy text generator\n\nExample: .fancy 32 Ikratos\n\n"
      );
      listall("Ikratos Bot").forEach((txt, num) => {
        text += `${(num += 1)} ${txt}\n`;
      });
      return await conn.reply(text);
    }

    let fancytextt = await fancytext(`${text.slice(2)}`, text.split(" ")[0])
    conn.reply(fancytextt)
  }

  handler.help = ['fancy <text>']
  handler.tags = ['tool','maker']
  handler.command = /^(ifancy|fancy)$/i
  export default handler