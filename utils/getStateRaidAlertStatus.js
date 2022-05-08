const axios = require('axios')
const config = require('../config.json')

module.exports = async function getStateRaidAlertsStatus() {
 const results = await axios.get(config.api).then(res => res.data)
 const stateStatus = results.states[config.state]

 console.log(`Дата: ${new Date().toLocaleDateString()}, Область: ${config.state}, Тривога: ${stateStatus.enabled === false ? 'Нема' : 'Тривога'}`)

 return stateStatus
}