export class Emitter {
  constructor() {
    this.listeners = {};
  }

  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }
    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
    return true;
  }

  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event] = this.listeners[event].filter(
        (listener) => listener !== fn
      );
    };
  }
}

// const emitter = new Emitter()

// const unsub = emitter.subscribe('test', data => console.log('Проверяю: ', data))
// emitter.emit('test', 123)
// setTimeout(()=>{
//     emitter.emit('test', 'Проверка через 2 секунды')
// }, 2000)

// setTimeout(()=>{
//     emitter.emit('test', 'Проверка через 4 секунды')
// }, 4000)

// setTimeout(()=>{
//     // unsub()
// }, 3000)