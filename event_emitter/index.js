class EventEmitter {
    listeners = {}
    maxListenersCount = 10

    #addListener (eventName, cb) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = []
        }
        this.listeners[eventName].push(cb)
        return this
    }

    #removeListener (eventName, cb) {
        const listener = this.listeners[eventName]
        if (!listener) {
            return this
        }

        listener.forEach((existingCb, idx) => {
            if (cb === existingCb) {
                listener.splice(idx, 1)
            }
        })

        return this
    }

    on (eventName, cb) {
        if (this.listeners[eventName].lenght + 1 >= this.maxListenersCount.k) {
            console.warn('Too many subscribers')
        }
        return this.#addListener(eventName, cb)
    }

    off (eventName, cb) {
        return this.#removeListener(eventName, cb)
    }

    once (eventName, cb) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = []
        }

        if (this.listeners[eventName].lenght + 1 >= this.maxListenersCount) {
            console.warn('Too many subscribers')
        }

        const wrapper = (...args) => {
            cb(...args)
            this.#removeListener(eventName, wrapper)
        }

        this.listeners[eventName].push(wrapper)
        return this
    }

    emit (eventName, ...data) {
        const listener = this.listeners[eventName]
        if (!listener) {
            return this
        }

        listener.forEach((cb) => {
            cb(...data)
        })

        return this
    }

    setMaxListeners(n) {
        this.maxListenersCount = n
    }
}

const emitter = new EventEmitter()

const handler = (data, data2) => {
    console.log('our data is: ', data, data2)
}

emitter.once('data', handler)

emitter.emit('data', 'hello', 'world', 'teach me', 'skills')
emitter.emit('data', 'hello', 'world')
emitter.emit('data', 'hello', 'world')
