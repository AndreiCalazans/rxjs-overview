import { Subject, from } from 'rxjs';
import { multicast } from 'rxjs/operators';

// Subjects are Observables.
// We can subscribe multiple observables to a subject.

const mathSubject = new Subject();

function addTwo(value) {
  console.log('ADD NUMBER: ', value + 2)
}

function multipleThree(value) {
  console.log('MULTIPLE: ', value * 3)
}

mathSubject.subscribe(addTwo);

mathSubject.subscribe(multipleThree);


const observable = from([1, 2, 3]);


observable.subscribe(mathSubject);


const source = from([1, 2, 3]);
const subject = new Subject();
const multicasted = source.pipe(multicast(subject));
 
// These are, under the hood, `subject.subscribe({...})`:
multicasted.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
multicasted.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});
 
// This is, under the hood, `source.subscribe(subject)`:
multicasted.connect();