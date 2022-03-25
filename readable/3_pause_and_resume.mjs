import { Readable } from 'stream'
import { sleep } from '../utils.mjs'

const readableStream = new Readable({
    read(size) {
        // console.log('read size: ', size / 1024)
    }
})

readableStream.on('data', async (chunk) => {
    console.log(chunk.toString())
    readableStream.pause()
    await sleep(500)
    readableStream.resume()
})

readableStream.on('pause', () => {
    console.log('Stream was paused.')
})

readableStream.on('resume', () => {
    console.log('Stream was resumed.')
})

readableStream.push('hellow')
readableStream.push('teach')
readableStream.push('teach')
readableStream.push('teach')
readableStream.push('teach')
readableStream.push('teach')
readableStream.push('teach')
readableStream.push('teach')
readableStream.push(null)