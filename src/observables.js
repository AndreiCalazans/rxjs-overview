import { Obsevable, from, Observable } from 'rxjs';

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


// Observables are like functions with zero arguments, but generalize those to allow multiple values.

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


console.log('--------------------------------------------------------')
console.log('Easy unsubscribe');
const observable = from([10, 20, 30]);
const subscription = observable.subscribe(console.log);
subscription.unsubscribe();


const observTest = new Observable(sub => {
  console.log(' START ');
  sub.next('first value');
  sub.next('second value');
  sub.next('third value');
});

observTest.subscribe(returnValue => {
  console.log("RETURN VALUE GOT", returnValue);
})