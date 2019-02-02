import { fromEvent } from 'rxjs';

const button = document.querySelector('button');
// Without from event
button.addEventListener('click', () => console.log('Clicked'));

// with from event
fromEvent(button, 'click')
  .subscribe(() => console.log("stream clicked"));

