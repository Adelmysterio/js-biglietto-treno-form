const priceRaw = 0.276113;

const underDiscount = 24.552;

const overDiscount = 37.893;

const bottone = document.querySelector('button')

bottone.addEventListener('click', function () {

    const km = document.querySelector('input').value

    const age = document.querySelector('#age').value

    let track = km * priceRaw;
    
    let trackShow = track.toFixed(2)
    
    document.getElementById('track').innerHTML = trackShow
    
    if (age < 21) {
    
        let priceDiscounted = (track / 100) * underDiscount
    
        let priceFinal = track - priceDiscounted
    
        let priceFinalShow = priceFinal.toFixed(2)
    
        console.warn(priceFinalShow)
    
        document.getElementById('priceFinalShow').innerHTML = priceFinalShow
    }
    
    if (age >= 63) {
    
        let priceDiscounted = (track / 100) * overDiscount;
    
        let priceFinal = track - priceDiscounted;
    
        let priceFinalShow = priceFinal.toFixed(2);
    
        console.warn(priceFinalShow)
    
        document.getElementById('priceFinalShow').innerHTML = priceFinalShow
    }
    
    else if (age >= 21 && age < 63) {
    
        let priceFinalShow = track.toFixed(2)
    
        console.warn(priceFinalShow)
    
        document.getElementById('priceFinalShow').innerHTML = priceFinalShow
    };
})
