import { fromEvent } from 'rxjs';
import { scan, throttleTime, map } from 'rxjs/operators';
import './observables';

const button = document.querySelector('button');

let count = 0;
let rate = 1000;
var lastClick = Date.now() - rate;
button.addEventListener('click', (event) => {
  if (Date.now() - lastClick >= rate) {
    count += event.clientX;
    console.log(`Clicked ${count}`);
    lastClick = Date.now();
  }
})


// With RXJS
fromEvent(button, 'click')
  .pipe(
    throttleTime(1000),
    map(evt => evt.clientX),
    scan((count, clientX) => count + clientX, 0)
  )
  .subscribe(count => console.log(`Stream clicked: ${count}`))
