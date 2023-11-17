// import { v4 as uuid } from "uuid";

export type alertsTypes = 'success' | 'info' | 'warning' | 'error'
function useAlerts() {
  const alertsList = useState(
    'alertsHandler',
    (): { [key in alertsTypes]: { message: string, id: string }[] } => ({
      success: [],
      info: [],
      warning: [],
      error: [],
    }),
  )
  const setAlert = (message: string, type: alertsTypes = 'error') => {
    alertsList.value[type].push({
      message,
      id: '',
    })
  }
  const clearAlert = (uuid: string) => {
    let isCleared = false
    for (const [alertType, alertArr] of Object.entries(alertsList.value)) {
      if (isCleared)
        break

      alertArr.some((alert, index) => {
        if (alert.id === uuid) {
          alertsList.value[alertType as alertsTypes].splice(index, 1)
          isCleared = true
          return true
        }
        return false
      })
    }
  }

  return { alertsList, setAlert, clearAlert }
}

export { useAlerts }
