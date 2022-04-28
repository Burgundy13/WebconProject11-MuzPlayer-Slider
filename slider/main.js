let indexSlajda = 1;

const prikazSlajdova = (x) => {
    const slajdovi = document.getElementsByClassName('slide')
    // console.log('Broj slajdova je', slajdovi.length)
    if(x > slajdovi.length) {
        indexSlajda = 1;
    }

    if(x < 1) {
        indexSlajda = slajdovi.length;
    }

    for(let i = 0; i < slajdovi.length; i++) {
        slajdovi[i].style.display = 'none';
    }

    slajdovi[indexSlajda - 1].style.display = 'block';
}

const dodavanjeSlajda = (x) => {
    prikazSlajdova(indexSlajda = indexSlajda + x)
}
prikazSlajdova(indexSlajda);