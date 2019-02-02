import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

const button = document.querySelector('button');
let count = 0;

// Without from event
button.addEventListener('click', () => console.log(`Clicked: ${++count} times`));

// with from event
fromEvent(button, 'click')
  .pipe(scan(count => count + 1, 0))
  .subscribe(count => console.log(`Stream clicked: ${count} times`));

