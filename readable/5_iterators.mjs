import { createReadStream } from 'fs'
import { resolve } from 'path'

const stream = createReadStream(resolve(process.cwd(), 'readable/textfile.txt'), { highWaterMark: 110 * 1024 * 1024 })

const asyncIteraor = async (readable) => {
    let chunkCount = 0
    for await (const chunk of readable) {
        const chunkSize = chunk.length / 1024
        chunkCount++
    }
    console.log('chunkCount is: ', chunkCount)
}

asyncIteraor(stream)