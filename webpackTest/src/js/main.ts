import { GreetEvent } from './_GreetEvent';
import { User } from './_User';
import '../css/main.scss';


let dropEvent = new GreetEvent({greet: 'yaaaa!!!'});
dropEvent.greeting();

const USER = new User('omg');
USER.displayName();

USER.myname = 'tarou';

USER.displayName();

let name = USER.myname;

console.log(name);