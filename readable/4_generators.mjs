import { Readable } from 'stream'
import { sleep } from '../utils.mjs'

const text = 'Простоте, которая является отличительной чертой вестернов, здесь нет места. Это то, что Серлинг называет „измерением воображения“ и превращает каждый выпуск в материал для размышлений. Что отличает Серлинга от современных писателей на телевидении, так это его чёткие диалоги и хорошо поставленные фразы»'
const wordsArr = text.replace(',', '').split(' ')

const readableStream = new Readable({
    read(size) {
        // console.log('read size: ', size)
    }
})

async function * generate() {
    for (const word of wordsArr) {
        await sleep(300)
        yield word
    }
}

const stream = Readable.from(generate())

stream.on('data', (chunk) => {
    console.log(chunk)
})