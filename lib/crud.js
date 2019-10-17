class CRUDEmitter {

    listeners = {}

    createUserListener(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].push(fn);
        return this;
    }

    onCreateUser(event, fn) {
        return this.createUserListener(event, fn);
    }

    updateUserListener(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].push(fn);
        return this;
    }

    onUpdateUser(event, fn) {
        return this.updateUserListener(event, fn);
    }

    readUserListener(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].push(fn);
        return this;
    }

    onReadUser(event,fn) {
        return this.readUserListener(event, fn);
    }

    deleteUserListener(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].push(fn);
        return this;
    }

    onDeleteUser(event, fn) {
        return this.deleteUserListener(event, fn);
    }

}

module.exports = CRUDEmitter;
