import { Obsevable, Observable } from 'rxjs';

// const observable = new Observable(subscriber => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   }, 1000);
// });

// console.log('Just before subscribe');
// observable.subscribe({
//   next(x) {
//     console.log('Got value' + x);
//   },
//   error(err) {
//     console.log('Something wrong occured');
//   },
//   complete() {
//     console.log('Done');
//   },
// });

// console.log('Subscribe is over');



/*
   Pull and Push systems.
   Observers are Push systems, we subscribe to them (Consumer) and they send us data when they are ready(They are the Producers)


*/


// Simple Pull System
function foo() {
  console.log('Hello');
  return 42;
}

const x = foo.call();
console.log(x);
const y = foo.call();
console.log(y);


const fooTwo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
});

fooTwo.subscribe(x => {
  console.log(x);
});

fooTwo.subscribe(y => {
  console.log(y);
});


/* NOTE: The difference between a function and an observable is that the latter
*  can return multiple values over time
*/

console.log('--------------------------------------------------------')

const fooThree = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(100);
  subscriber.next(20);
  setTimeout(() => {
    subscriber.next(300); // happens asynchronously
  }, 1000);
});

console.log('before');
fooThree.subscribe(x => {
  console.log(x);
});
console.log('after');

