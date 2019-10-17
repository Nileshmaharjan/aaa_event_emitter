const EventEmitter = require('../index');

const eventEmitter = new EventEmitter();

function c1() {
    console.log('User updated')
}

eventEmitter.createUserListener('updateUser', c1);
eventEmitter.emit('updateUser');
