import { Readable } from 'stream'
import { sleep } from '../utils.mjs'

const readableStream = new Readable({
    read(size) {
        // console.log('read size: ', size / 1024)
    }
})

readableStream.on('readable', async () => {
    let chunk;
    while (null !== (chunk = readableStream.read(1))) {
        const char = chunk.toString()
        console.log(char)

        if (char === ' ') {
            await sleep(1000)
        } else {
            await sleep(200)
        }
    }
})

readableStream.push('First Hello teach me skills and all students')
readableStream.push('Hello teach me skills and all students')