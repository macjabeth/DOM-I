// set background image
document.body.style.backgroundColor = '#000';
document.body.style.backgroundImage = `url('flying.jpg')`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.transition = 'background 0.5s linear';
document.body.style.color = '#fff';

// start audio
const x = document.createElement('audio');
x.autoplay = true;
x.setAttribute('src', 'titanic-flute.mp3');

const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

secondTens.textContent = 0;
secondOnes.textContent = 0;
msHundreds.textContent = 0;
msTens.textContent = 0;

const sw = { secondTens: 0, secondOnes: 0, msTens: 0, msHundreds: 0 };

const stopwatchID = setInterval(() => {
  sw.msTens++;

  if (sw.msTens === 10) {
    sw.msHundreds++;

    if (sw.msHundreds === 10) {
      sw.secondOnes++;

      if (sw.secondOnes === 10) {
        sw.secondTens++;

        clearInterval(stopwatchID);

        document.body.style.backgroundImage = `url('sinking.jpg')`;
        setTimeout(() => {
          document.body.style.backgroundImage = `url('leospace.jpg')`;
        }, 5000);
        setTimeout(() => {
          document.body.style.backgroundImage = `url('never-let-go.gif')`;
          x.pause(); x.setAttribute('src', 'come-back.mp3');
          x.currentTime = 1.5; x.play();
        }, 10000);
        x.pause(); x.setAttribute('src', 'sad-violin.mp3');
        x.currentTime = 0.8; x.play();

        secondTens.textContent = sw.secondTens;

        sw.secondOnes = 0;
      }

      secondOnes.textContent = sw.secondOnes;

      sw.msHundreds = 0;
    }

    msHundreds.textContent = sw.msHundreds;

    sw.msTens = 0;
  }

  msTens.textContent = sw.msTens;
}, 10);
