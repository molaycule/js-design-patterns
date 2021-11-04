class Publisher {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fnToRemove) {
    this.observers = this.observers.filter(fn => {
      if (fn !== fnToRemove) return fn;
    });
  }

  trigger() {
    this.observers.forEach(fn => fn.call());
  }
}

function observer1() {
  console.log('observer1 triggered');
}

function observer2() {
  console.log('observer2 triggered');
}

const publisher = new Publisher();
publisher.subscribe(observer1);
publisher.subscribe(observer2);
publisher.trigger();
publisher.unsubscribe(observer2);
publisher.trigger();
