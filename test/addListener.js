const EventEmitter = require('../index');

const eventEmitter = new EventEmitter();

function c1() {
    console.log('Event ocurred')
}

eventEmitter.addListener('eventOne', c1);
eventEmitter.emit('eventOne');

