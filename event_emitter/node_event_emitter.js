const { EventEmitter } = require('events')

class Stream extends EventEmitter {
    // read () {
        
    // }

    // write () {

    // }
}

const emitter = new Stream()

const handler = (...rest) => {
    console.log('our data is: ', ...rest)
}

emitter.on('data', handler)

let i = 0

setInterval(() => {
    emitter.emit('data', i++, 'hello', 'world', 'from TMS')
}, 1000)

