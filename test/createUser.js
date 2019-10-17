const EventEmitter = require('../index');

const eventEmitter = new EventEmitter();

function c1() {
    console.log('New User Created')
}

eventEmitter.createUserListener('createNewUser', c1);
eventEmitter.emit('createNewUser');

