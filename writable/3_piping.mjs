import { createReadStream, createWriteStream } from 'fs'
import { resolve } from 'path'

const readableStream = createReadStream(resolve(process.cwd(), 'readable/textfile.txt'))
const writablereadableStream = createWriteStream(resolve(process.cwd(), 'writable/output.txt'))

readableStream
    .pipe(writablereadableStream)