const EventEmitter = require('../index');
const eventEmitter = new EventEmitter();

function c1() {
    console.log('Event occured');
}

eventEmitter.on('eventOne', c1);
eventEmitter.emit('eventOne');
