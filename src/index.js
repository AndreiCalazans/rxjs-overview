import { fromEvent } from 'rxjs';
import { scan, throttleTime } from 'rxjs/operators';

const button = document.querySelector('button');

let count = 0;
let rate = 1000;
var lastClick = Date.now() - rate;
button.addEventListener('click', () => {
  if (Date.now() - lastClick >= rate) {
    console.log(`Clicked ${++count} times`);
    lastClick = Date.now();
  }
})


// With RXJS
fromEvent(button, 'click')
  .pipe(
    throttleTime(1000),
    scan(count => count + 1, 0)
  )
  .subscribe(count => console.log(`Stream cliked: ${count} times`))
