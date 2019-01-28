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
