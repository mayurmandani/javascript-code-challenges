/* Observer Pattern - Use case - When multiple objects need to be updated when a particular object changes. */

class NewsPublisher {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
  }

  notify(news) {
    this.subscribers.forEach(sub => sub.update(news));
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }

  update(news) {
    console.log(`${this.name} received news: ${news}`);
  }

}

const publisher = new NewsPublisher();

const mayur = new Subscriber("Mayur");

const mandani = new Subscriber("Mandani");

publisher.subscribe(mayur); 
publisher.subscribe(mandani); 
publisher.notify("Breaking News!");

// Mayur received news: Breaking News!
// Mandani received news: Breaking News!

// React Example: Pub/Sub with Context and useEffect. In React, we might simulate the observer pattern by combining Context with custom hooks.