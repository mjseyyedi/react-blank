export default {
  timeout: 10000, //in ms
  validateStatus: status => status >= 200 && status < 600,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  main:{
    hostname: 'https://snappfood.ir',
    endpoints: [
      {
        key: 'getHomePage',
        url: '/mobile/v3/user/new-home',
        method: 'GET'
      }
    ]
  },

}
