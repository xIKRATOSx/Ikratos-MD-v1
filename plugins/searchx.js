import axios from 'axios'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `*Example: ${usedPrefix + command} Con mi prima*`
try {
let res = await xnxxsearch(text)
let json = res.result
let listSerch = []
let teskd = `Videos Related To: ${args.join(" ")}`
const sections = [{
title: `ⓡⓔⓢⓤⓛⓣⓢ`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: 'ɪᴋʀᴀᴛᴏs-ᴍᴅ-ᴠ1 • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ\nowner: +92 347 0027813',
title: " 『 Search Results 』",
buttonText: "[ Click Here ]",
sections}
for (let i of json) {
listSerch.push({title: i.title, description: '⇧ select this option to download this video ⇧', rowId: `${usedPrefix}xnxxdl ${i.link}`})} 
conn.sendMessage(m.sender, listMessage, { quoted: m })
} catch (e) {
m.reply('*Error\nPrh ly Bay, Fazool Cheezy Mat Dekh*')
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch|xsearch$/i
handler.owner = true
handler.private = true
handler.premium = true
export default handler

async function xnxxsearch(query) {
return new Promise((resolve, reject) => {
const baseurl = 'https://www.xnxx.com'
fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'}).then(res => res.text()).then(res => {
let $ = cheerio.load(res, { xmlMode: false });
let title = [];
let url = [];
let desc = [];
let results = [];
$('div.mozaique').each(function(a, b) {
$(b).find('div.thumb').each(function(c, d) {
url.push(baseurl+$(d).find('a').attr('href').replace("/THUMBNUM/", "/"))
})})
$('div.mozaique').each(function(a, b) {
$(b).find('div.thumb-under').each(function(c, d) {
desc.push($(d).find('p.metadata').text())
$(d).find('a').each(function(e,f) {
title.push($(f).attr('title'))
})})})
for (let i = 0; i < title.length; i++) {
results.push({ title: title[i], info: desc[i], link: url[i] })}
resolve({ code: 200, status: true, result: results
})}).catch(err => reject({code: 503, status: false, result: err }))})}