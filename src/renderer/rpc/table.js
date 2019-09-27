// renderer.js
var zerorpc = require('zerorpc')
var client = new zerorpc.Client()
client.connect('tcp://127.0.0.1:4242')

export function getHello(params) {
  return client.invoke('hello', name.value, (error, res) => {
    if (error) {
      console.error(error)
    } else {
      console.log(res)
    }
  })
}
