const EventEmitter = require('../index');
const eventEmitter = new EventEmitter();

function c1() {
    console.log('Event occured');
}

eventEmitter.on('eventOne', c1);
console.log(eventEmitter.listenerCount('eventOne'));
eventEmitter.removeListener('eventOne', c1);
console.log(eventEmitter.listenerCount('eventOne'));