export default class EventOM{
    constructor() {
        this._events = {};
    }

    addEventListener(name, func) {
        if (!this._events[name]) {
            this._events[name] = [];
        }

        this._events[name].push(func);
    }

    removeEventListener(name, func) {
        if (this._events[name]) {
            this._events[name] = this._events[name].filter(handler => handler !== func);
        }
    }

    beginEvent(name) {
        if (this._events[name]) {
            this._events[name].forEach(func => func());
        }
    }

    beginEventWidthParameters(name, parameters) {
        if (this._events[name]) {
            this._events[name].forEach(func => func(parameters));
        }
    }
} 