const priceRaw = 0.276113;

const underDiscount = 24.552;

const overDiscount = 37.893;

const bottone = document.querySelector('button');

bottone.addEventListener('click', function () {

    const km = Number.parseFloat(document.querySelector('input').value);

    if (isNaN(km)) {

        alert('Valore chilometri non valido')

    };

    const age = Number.parseFloat(document.querySelector('#age').value);

    if (isNaN(age)) {

        alert('Valore età non valido')

    };

    let track = km * priceRaw;

    let trackShow = track.toFixed(2);

    document.getElementById('track').innerHTML = '&euro; ' + trackShow

    if (age < 21) {

        let priceDiscounted = (track / 100) * underDiscount

        let priceFinal = track - priceDiscounted

        let priceFinalShow = priceFinal.toFixed(2)

        console.warn(priceFinalShow)

        document.getElementById('priceFinalShow').innerHTML = '&euro; ' + priceFinalShow
    }

    if (age >= 63) {

        let priceDiscounted = (track / 100) * overDiscount;

        let priceFinal = track - priceDiscounted;

        let priceFinalShow = priceFinal.toFixed(2);

        console.warn(priceFinalShow)

        document.getElementById('priceFinalShow').innerHTML = '&euro; ' + priceFinalShow
    }

    else if (age >= 21 && age < 63) {

        let priceFinalShow = track.toFixed(2)

        console.warn(priceFinalShow)

        document.getElementById('priceFinalShow').innerHTML = '&euro; ' + priceFinalShow
    };
})
