

var All = require('./lib/index');
class EventEmitter extends All {

   listeners = {}

    emit(eventName, ...args) {
        let fns = this.listeners[eventName];
        if (!fns) return false;
        fns.forEach((f) => {
          // console.log(f(...args));
          f(...args);
        });
        return true;
    }


  listenerCount(eventName) {
    let fns = this.listeners[eventName] || [];
    return fns.length;
  }

  rawListeners(eventName) {
    return this.listeners[eventName];
  }


  //   once(eventName, fn) {
      
  //       this.listeners[eventName] = this.listeners[eventName] || [];
        
  //       const onceWrapper = () => {
  //         fn();
  //         this.off(eventName, onceWrapper);
  //       }
  //       this.listeners[eventName].push(onceWrapper);
  //       return this;
  //   }

  //   off(event, fn) {
  //       return this.removeListener(event, fn);
  //   }

  //   removeListener (event, fn) {
  //     let lis = this.listeners[event];
  //     console.log(lis);
  //     if (!lis) return this;
  //     for(let i = lis.length - 1; i >= 0; i--) {
  //       if (lis[i] === fn) {

  //         lis.splice(i,1);
  //         break;
  //       }
  //     }
  //     return this;
  // }
}

module.exports = EventEmitter;