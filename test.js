

const EventEmitter = require('./index');


// Add Event Listener 
const eventEmitter = new EventEmitter();

// eventEmitter.addListener('test-event', 
//  ()=> { console.log ('Gunners') } 
// );

// eventEmitter.emit('test-event');

function c1() {
    console.log('event occured');
 }
 
 function c2() {
    console.log('another event occured');
 }

 function c3() {
     console.log('another another event occured');
 }

 // Alias to add event
eventEmitter.on('eventOne', c1); // Register for eventOne
eventEmitter.on('eventOne', c2);
eventEmitter.on('eventOne', c3); // Register for eventOne
eventEmitter.on('eventTwo', c1);

console.log(eventEmitter.listenerCount('eventTwo'));
// eventEmitter.emit('eventOne');
// eventEmitter.emit('eventOne');

// one time event 

// eventEmitter.once('oneTimeEvent', () => {
//     console.log('oneTimeEvent once fired')
// });

// eventEmitter.emit('oneTimeEvent');

//event with callback parameters

// eventEmitter.on('status', (code, msg)=> console.log(`Got ${code} and ${msg}`));

// eventEmitter.emit('status', '200', 'OK');

// listener count for an event 

// console.log(eventEmitter.listenerCount('status'));




//unregistering events 

eventEmitter.off('eventTwo', c1);

// eventEmitter.emit('eventOne');

console.log(eventEmitter.listenerCount('eventTwo'));

// console.log(eventEmitter.rawListeners('status'));

// eventEmitter.emit('status');

// console.log(eventEmitter.listenerCount('status'));


// listener count for an event 

// console.log(eventEmitter.listenerCount('eventOne'));







