import {EventEmitter, on} from 'events';

const emitter = new EventEmitter();

const geetHandler = (name) => {
    console.log('hi '+name);
}

const byeHandler = (name) => {
    console.log('bye '+name);
}

// Register event listeners

emitter.on('greet', geetHandler);
emitter.on('bye', byeHandler);

emitter.emit('greet', 'john');
emitter.emit('bye', 'jonh'); 

//Error Handler

emitter.on('error', (err) => {
    console.log('error ', err);
})

emitter.emit('error', new Error('something went wrong'));