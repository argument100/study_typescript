import { echoLog } from './_sampleMod';
import '../css/main.scss';

let body = document.getElementsByTagName('body')[0];
body.classList.add('sky');

echoLog();

$(function(){
  $('.js-test').css('color', 'red');
  console.log('yoba');
});