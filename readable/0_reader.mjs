import { Readable } from 'stream'

// const readableStreamFirst = new Readable({
//     read(size) {
//         console.log('read size: ', size / 1024)
//     }
// })

// readableStreamFirst.on('data', (chunk) => {
//     console.log('read data: ', chunk.toString())
// })

// readableStreamFirst.push('Hello')
// readableStreamFirst.push('world')

// const readableStreamSecond = new Readable()
// readableStreamSecond._read = (size) => console.log('read size: ', size / 1024)

// readableStreamSecond.on('data', (chunk) => {
//     console.log('readableStreamSecond data: ', chunk.toString())
// })

// readableStreamSecond.push('Hello')
// readableStreamSecond.push('world')

class MyCoolStream extends Readable {
    constructor (opts) {
        super(opts)
    }

    _read(size) {
        console.log('read size: ', size / 1024)
    }
    
    hiJenya() {
        console.log('Jenya privet')
    }
}

const readableStreamThird = new MyCoolStream()

readableStreamThird.on('data', (chunk) => {
    console.log('readableStreamSecond data: ', chunk.toString())
    readableStreamThird.hiJenya()
})

readableStreamThird.on('end', () => {
    console.log('Кина не будет')
})

let i = 0
const timeoutHandler = () => {
    if (i < 100) {
        readableStreamThird.push(`Hello ${i++}`)
        setTimeout(timeoutHandler, 200 - i * 2)
    } else {
        readableStreamThird.push(null)
    }
}
setTimeout(timeoutHandler, 200)