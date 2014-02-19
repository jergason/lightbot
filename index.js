var johnny = require('johnny-five')
var irc = require('irc')

var board = new johnny.Board()
board.on('ready', function() {
  var leds = [
    new johnny.Led(12),
    new johnny.Led(11),
    new johnny.Led(10),
    new johnny.Led(9)
  ]

  console.log('what the POOOOOOOOOOOOOOP')

  var client = new irc.Client('chat.freenode.net', 'lightbot', {
    channels: ['#lightbot', '#utahjs', '#Node.js']
  })

  console.log('client is', client)

  client.addListener('registered', function() {
    console.log('registered', arguments)
  })

  client.addListener('message', function(from, to, message) {
    console.log('arguments are ', arguments)
    dasBlinkenlights(message)
  })

  function dasBlinkenlights(message) {
    leds[message[0].charCodeAt() % leds.length].toggle()
  }
})
