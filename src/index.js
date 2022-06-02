import generateJoke from './generateJokes';
import './styles/main.scss';
import image from './assets/1.jpg';

const testImg = document.getElementById('testImg');
testImg.src = image;

console.log(generateJoke());
