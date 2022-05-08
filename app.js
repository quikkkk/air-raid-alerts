const getStateRaidAlertsStatus = require('./utils/getStateRaidAlertStatus')
const getAlertStatusChange = require('./utils/getAlertStatusChange')
const wait = require('./utils/wait')
const config = require('./config.json')

async function Main () {
 let isAlertActive = false

 while (true) {
  try {
   const alertStatus = await getStateRaidAlertsStatus()
   const alertStatusChange = getAlertStatusChange(isAlertActive, alertStatus)

   if (alertStatusChange === alertStatusChange.Started)
    console.log('Started')
   else if (alertStatusChange === alertStatusChange.Finished)
    console.log('Finished')

   isAlertActive = alertStatus.enabled
   await wait(config.checkIntervalInMilliseconds)
  } catch (e) {
   throw e
  }
 }
}

Main()