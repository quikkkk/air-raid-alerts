require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api')
const getStateRaidAlertsStatus = require('./utils/getStateRaidAlertStatus')
const wait = require('./utils/wait')
const config = require('./config.json')
const bot = new TelegramBot(process.env.BOT_APIKEY, { polling: true })

class Main {
 constructor (isAlertActive) {
  this.isAlertActive = isAlertActive
 }

 async checkAirRaid () {
  while (true) {
   try {
    const alertStatus = await getStateRaidAlertsStatus()
    const id = -1001540342685

    this.isAlertActive = alertStatus.enabled
    
    if (this.isAlertActive)
     bot.sendMessage(id, '❗❗ Хмельницка область зараз у небезпеці', { parse_mode: 'Markdown' })

    bot.sendMessage(id, '💛💙 Схоже, Хмельницька область зараз у безпеці', { parse_mode: 'Markdown' })
    await wait(config.checkIntervalInMilliseconds)
   } catch (e) {
    throw e
   }
  }
 }
}

module.exports = new Main().checkAirRaid()