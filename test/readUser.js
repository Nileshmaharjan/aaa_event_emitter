const EventEmitter = require('../index');

const eventEmitter = new EventEmitter();

function c1() {
    console.log('User information')
}

eventEmitter.createUserListener('readUser', c1);
eventEmitter.emit('readUser');
