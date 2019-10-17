

const EventEmitter = require('./index');
const eventEmitter = new EventEmitter();

function c1() {

    console.log('Create New User');
}

function c2() {
    console.log('Update New User');
}


eventEmitter.createUserListener('createNewUser', c1);
eventEmitter.updateUserListener('updateNewUser', c2);
eventEmitter.emit('createNewUser');
eventEmitter.emit('updateNewUser');


