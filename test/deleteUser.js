const EventEmitter = require('../index');

const eventEmitter = new EventEmitter();

function c1() {
    console.log('Delete User')
}

eventEmitter.deleteUserListener('deleteUser', c1);
eventEmitter.emit('deleteUser');

