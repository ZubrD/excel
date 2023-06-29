import { capitalize } from "./utils";

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error("Нет объекта на который можно повесить событие!!!");
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      if (!this[method]) {
        throw new Error(
          `Метод ${method} не реализован в компоненте ${this.name || ""}`
        );
      }

      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method]);   // Навешивается слушатель на элемент $root
    });
  }

  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}

function getMethodName(eventName) {
  return "on" + capitalize(eventName);
}
