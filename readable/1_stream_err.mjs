import { Readable } from 'stream'

const readableStreamFirst = new Readable({
    read(size) {
        console.log('read size: ', size / 1024)
    }
})

readableStreamFirst.on('data', (chunk) => {
    console.log('read data: ', chunk.toString())
})

readableStreamFirst.on('error', (err) => {
    if (err.code === 156) {
        console.warn('156 error catched: ', err)
    } else {
        readableStreamFirst.destroy()
        console.error(`${err.code} error catched, stop processing Stream`)
    }
})

readableStreamFirst.push('Hello')

const error = new Error('Something going wrong.')
error.code = 11123
readableStreamFirst.emit('error', error)

readableStreamFirst.push('world')
readableStreamFirst.push(null)