import { Writable } from 'stream'

const writable = new Writable({
    write(chunk, encoding, next) {
        console.log('chunk', chunk.toString())
        // next()
    }
})

writable.write('hello')
writable.write('tms')
writable.write('school')