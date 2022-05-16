// Implement simple Event Emitter class.
// In short - it should be able to register callbacks for events, 
// 
// Usage examples:
// emiter.emit('event-type', data); // send event
// 
// emiter.on('event-type', callback); // listen for event type
// emiter.off('event-type', callback); // remove listener for event type

class EventEmitter {

}

// Tests

const emitter = new EventEmitter();

const callback = (data) => console.log('received event with data', data);

emitter.on('test-event', callback);
emitter.emit('test-event', { test: 42 });
// should run callback

emitter.off('test-event', callback);
emitter.emit('test-event', { test: 42 });
// should not do anything
