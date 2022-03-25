import { Writable, Readable } from 'stream'
import { sleep } from '../utils.mjs'

const readable = new Readable({
    read() {}
})

const writable = new Writable({
    async write(chunk, encoding, next) {
        console.log('chunk', chunk.toString())
        await sleep(100)
        next()
    }
})

readable.on('readable', () => {
    let data

    while (data = readable.read(1)) {
        writable.write(data)
    }
})

readable.push('Hello')
readable.push('TMS')
readable.push(null)