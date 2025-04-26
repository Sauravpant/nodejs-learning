const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('event1', (name) => {
  console.log(name + ' Event1 is triggered');
})

eventEmitter.on('event2', () => {
  console.log('Event2 is triggered')
})

eventEmitter.once('ev', () => {
  console.log("The event is triggered for once and wont be executed again");
})

eventEmitter.emit('event1', "Saurav");
eventEmitter.emit('event2')
eventEmitter.emit('ev');
