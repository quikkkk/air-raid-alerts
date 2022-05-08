const AlertStatusChange = { NotChanged: 0, Finished: 1, Started: 2 }

module.exports = function getAlertStatusChange (wasAlertActive, currentRaidAlertStatus) {
 const isAlertActive = currentRaidAlertStatus.enabled

 if (isAlertActive === wasAlertActive) 
  return AlertStatusChange.NotChanged

 if (!wasAlertActive && isAlertActive)
  return AlertStatusChange.Started

 if (wasAlertActive && !isAlertActive)
  return AlertStatusChange.Finished
}
