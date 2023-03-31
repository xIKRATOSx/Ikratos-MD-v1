import axios from 'axios';
import cheerio from'cheerio';
import fetch from 'node-fetch';
import https from "https";

function convertAngka(number) {
    const data = String(number).split('').reverse()
    let combine = ''
    for (let i = 0; i < data.length; i++) {
        if ((i + 1) % 3 == 0 && i != data.length - 1) {
            data[i] = `.${data[i]}`
        }
    }
    combine = `${data.reverse().join('')}`
    return combine
}

async function zippydl(url) {
    return new Promise((resolve, reject) => {
        axios.get(urls).then(({ data }) => {
            const $ = cheerio.load(data)
            const li = $.html()
            const po = $('#dlbutton').next().html()
            const le = po.split(';')[0]
            const lo = le.split("document.getElementById('dlbutton').href =")[1]
            const result = `${urls.split('/v')[0]}${eval(lo)}`
            const ho = $('#lrbox').text().replace(/\n/g, '')
			const ext = ho.split('Name:')[1].split('Size:')[0].split('.')[1]
            const hasil = {
                title: ho.split('Name:')[1].split('Size:')[0].trim(),
				extension: ext,
                filesize: ho.split('Size:')[1].split('Uploaded:')[0].trim(),
                upload: ho.split('Uploaded:')[1].split('          ')[0].trim(),
                link: result
            }
            resolve(hasil)
        })
    })
}


function ffancy(teks) {	
    return new Promise((resolve, reject) => {	
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)	
        .then(({ data }) => {	
            let $ = cheerio.load(data)	
            let hasil = []	
            $('table > tbody > tr').each(function (a, b) {	
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })	
            })	
            resolve(hasil)	
        })	
    })	
}	

 async function fancy(teks,num){	
   try{	
     let huhh = await ffancy(teks)	
	 return huhh[num].result	
   } catch (e)	
   {	
     console.log(e)	
   }	
}	
 async function randomfancy(teks,num){	
   try{	
     let huhh = await ffancy(teks)	
	 return huhh[num].result	
   } catch (e)	
   {	
     console.log(e)	
   }	
}


async function trustpositif(url) {
  if(!url) return false
  let agent = new https.Agent({ rejectUnauthorized: false })
  url = Array.isArray(url) ? encodeURIComponent(url.join("\n")) : url
  let { data } = await axios({
    "url": "https://trustpositif.kominfo.go.id/Rest_server/getrecordsname_home",
    "method": "POST",
    "httpsAgent": agent,
    "data": {
      "name": url,
    }
  })
  let result = {}
  for(let i of data.values) {
    result[i.Domain] = i.Status === "Ada"
  }
  return result
}

export {
zippydl,
trustpositif,
randomfancy,
fancy
}
