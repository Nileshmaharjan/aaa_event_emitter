const EventEmitter = require('../index');
const eventEmitter = new EventEmitter();

function c1() {
    console.log('');
}

eventEmitter.once('oneTimeEvent',c1);
eventEmitter.emit('oneTimeEvent');