const randomAd = document.getElementById('random-ad-container');

const cancelButton = document.getElementById('cancel-button');

const jobOffer = document.getElementById('job-offer');

let randomNumber = 0;

function randomNumberGenerator() {
    const randomNumberResult = Math.random();
    randomNumber = randomNumberResult;
    return
};

function createRandomAd() {
    randomNumberGenerator();
    if (randomNumber <= 0.2) {
        randomAd.innerHTML = `<img class="random-ad" src="file:///home/ubuntujs/repos/spanish-newspaper-school-project/images/ad1.jpg">`
    }
    else if (randomNumber <= 0.4 && randomNumber > 0.2) {
        randomAd.innerHTML = `<img class="random-ad" src="file:///home/ubuntujs/repos/spanish-newspaper-school-project/images/ad2.jpg">`
    }
    else if (randomNumber <= 0.6 && randomNumber > 0.4) {
        randomAd.innerHTML = `<img class="random-ad" src="file:///home/ubuntujs/repos/spanish-newspaper-school-project/images/ad3.jpg">`
    }
    else if (randomNumber <= 0.8 && randomNumber > 0.6) {
        randomAd.innerHTML = `<img class="random-ad" src="file:///home/ubuntujs/repos/spanish-newspaper-school-project/images/ad4.jpg">`
    }
    else {
        randomAd.innerHTML = `<img class="random-ad" src="file:///home/ubuntujs/repos/spanish-newspaper-school-project/images/ad5.jpeg">`
    }
};

createRandomAd();
cancelButton.addEventListener('click', () => jobOffer.innerHTML = '');