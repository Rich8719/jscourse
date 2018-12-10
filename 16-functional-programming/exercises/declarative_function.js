// transform JavaScript's EventManager from being **imperative** to **declarative** in 8 steps.
//declarative
const addEventListener = event => handler => eventMap => 
  eventMap.has(event) ?
    new Map(eventMap).set(event, eventMap.get(event).concat([handler])) : 
    new Map (eventMap).set(event, [handler])
  
const dispatchEvent = event => eventMap => (eventMap.has(event) && eventMap.get(event).forEach(a => a())) || event

const log = x => console.log(x) || x
const handler = () => log('hi')

const eventMap =
  addEventListener
    (handler)
    ('hello')
    (new Map())

dispatchEvent('hello')(eventMap)






//imperative
// class EventManager {
//   construct (eventMap = new Map ()) {
//     this.eventMap = eventMap;
//   }
//   addEventListener (event, handler) {
//     if (this.eventMap.has (event)) {
//       this.eventMap.set (event, this.eventMap.get (event).concat ([handler]));
//     } else {
//       this.eventMap.set (event, [handler]);
//     }
//   }
//   dispatchEvent (event) {
//     if (this.eventMap.has (event)) {
//       const handlers = this.eventMap.get (event);
//       for (const i in handlers) {
//         handlers [i] ();
//       }
//     }
//   }
// }
// const EM = new EventManager ();
// EM.addEventListner ('hello', function () {
//   console.log ('hi');
// });
// EM.dispatchEvent ('hello'); // hi