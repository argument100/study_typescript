import { GreetEvent } from './_GreetEvent';
import '../css/main.scss';


let dropEvent = new GreetEvent({greet: 'yaaaa!!!'});
dropEvent.greeting();