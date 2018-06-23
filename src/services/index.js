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

const requestFileUpload = (data, userId) => {
  console.log("requesting to upload for user " + userId);
  console.dir(data);
  return { 
    location: 'http://'
  };
  const request = {
    ...data
  };

  return fetch(`${config.api}/api/v0/add`, {
    method: 'POST',
    body: data,
  })
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson)
    return responseJson.uri
  })
  .catch((error) => {
    console.error(error)
  })
}

const uploadFile = (file, uri) => {
  console.log("uploading to " + uri);
  console.dir(file);
  return true;
  const formData  = new FormData()
  formData.append('blob', new Blob([JSON.stringify(file)]), 'file')

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

const handleError = (err, other) => {
  console.log(err);
  if (other) {
    console.dir(other);
  }
}

const createOrUpdateREDA = (id, data) => {
  return true;
}

export default {
  addData: addData,
  getData: getData,
  requestFileUpload: requestFileUpload,
  uploadFile: uploadFile,
  handleError: handleError,
  createOrUpdateREDA: createOrUpdateREDA,
}