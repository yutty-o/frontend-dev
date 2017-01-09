import './assets/style/sample.styl';
import png from './assets/img/sample.png';

const target = document.getElementById('app');
const imgPng = document.createElement('img');
const text = document.createElement('p');

imgPng.src = png;
text.innerHTML = 'sample';

target.appendChild(text);
target.appendChild(imgPng);
