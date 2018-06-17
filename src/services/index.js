//server actions

import config from '../../config/aws'

const getData = (hash) => {
  return fetch(`${config.gateway}/aws/${hash}`)
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson
  })
  .catch((error) => {
    console.error(error)
  })

}

const addData = (data) => {
  const formData  = new FormData()
  formData.append('blob', new Blob([JSON.stringify(data)]), 'file')

  return fetch(`${config.api}/api/v0/add`, {
    method: 'POST',
    body: formData,
  })
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson)
    return responseJson.hash
  })
  .catch((error) => {
    console.error(error)
  })
}

export default {
  addData,
  getData,
}