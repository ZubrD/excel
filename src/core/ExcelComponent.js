// import { DomListener } from "./DomListener";     // Можно и так импортировать
import { DomListener } from "@core/DomListener";

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.prepare()
        this.unsubscribers = []
    }

    prepare() {
        
    }

    // Возвращает шаблон компонента
    toHTML() {
        return ''
    }

    // Уведомляю слушаетля о событии event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // Подписываюсь на событие event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }

    //Инициализирую компонент, добавляю DOM слушателей
    init() {
        this.initDOMListeners()
    }

    // Удаляю компонент, очищаю массив слушателей
    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }
}