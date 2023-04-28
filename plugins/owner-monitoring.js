import fetch from 'node-fetch';

// const MONITOR_API_KEY = process.env['MONITOR'];
const MONITOR_API_KEY = 'ur1903118-cbaba69f70845ec19cb6447d' // Enter your uptimerobot APIKEY here ===== https://uptimerobot.com/dashboard?ref=website-header#mySettings

var handler = async (m, { conn }) => {
  conn.reply(m.chat, 'Sedang memuat informasi monitor... Silahkan tunggu', m);

  try {
    const [monitorResponse, accountResponse] = await Promise.all([
      fetch('https://api.uptimerobot.com/v2/getMonitors', {
        method: 'POST',
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          api_key: MONITOR_API_KEY,
          format: 'json',
          logs: '1'
        })
      }),
      fetch('https://api.uptimerobot.com/v2/getAccountDetails', {
        method: 'POST',
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          api_key: MONITOR_API_KEY,
          format: 'json'
        })
      })
    ]);

    if (!monitorResponse.ok || !accountResponse.ok) {
      throw new Error('Failed to fetch monitor data');
    }

    const { monitors } = await monitorResponse.json();
    const { account } = await accountResponse.json();
    const monitorData = monitors.map(monitor => `Monitor ID: ${monitor.id}\nJudul: ${monitor.friendly_name}\nMonitor URL: ${monitor.url}\nMonitor Status: ${monitor.status}\nPort: ${monitor.port}\nInterval: ${monitor.interval}\n\n`).join('');

    conn.reply(m.chat, `Here is the monitor information:\n\n${monitorData}\nTotal Monitors Active: ${account.up_monitors}\nTotal Monitors Inactive: ${account.down_monitors}\nTotal Monitors Disabled: ${account.paused_monitors}`, m);
  } catch (error) {
    conn.reply(m.chat, 'Sorry, an error occurred. It is possible that the API key has reached the limit (10 req/min). Please wait for 1 minute to make another request.', m);
    console.error(error);
  }
};

handler.help = ['monitor'];
handler.tags = ['internet', 'tools'];
handler.owner = true;
handler.command = /^(monitor|monitors|moni)$/i;

export default handler;