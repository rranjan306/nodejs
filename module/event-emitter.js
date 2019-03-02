const EventEmitter = require('events');

class MyCustomEmitter extends EventEmitter {
  log() {
    this.emit('customer', {id: 1, name: 'Deepak'});
  }
}

module.exports = MyCustomEmitter;
