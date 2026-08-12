const izvedi = document.getElementById('izvedi')
const duzina = document.getElementById('duzina')
const broj = document.getElementById('broj')
const rezultat = document.getElementById('rezultat')

const velikaSlova = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const malaSlova = 'abcdefghijklmnopqrstuvwxyz'
const brojevi = '0123456789'
const interpunkcija = '!#&()*-.<>_'

const velikaSlovaOpcija = document.getElementById('velikaSlova')
const malaSlovaOpcija = document.getElementById('malaSlova')
const brojeviOpcija = document.getElementById('brojevi')
const interpunkcijaOpcija = document.getElementById('interpunkcija')
const ponavljanje = document.getElementById('ponavljanje')
const pocetakBroj = document.getElementById('pocetakBroj')
const pocetakInterpunkcija = document.getElementById('pocetakInterpunkcija')
const krajBroj = document.getElementById('krajBroj')
const krajInterpunkcija = document.getElementById('krajInterpunkcija')


function napraviSkupZnakova() {

    let znakovi = ''

    if (velikaSlovaOpcija.checked) {
        znakovi += velikaSlova
    }

    if (malaSlovaOpcija.checked) {
        znakovi += malaSlova
    }

    if (brojeviOpcija.checked) {
        znakovi += brojevi
    }

    if (interpunkcijaOpcija.checked) {
        znakovi += interpunkcija
    }

    return znakovi
}


function generirajLozinku(znakovi, duljina, dozvoliPonavljanje, pocetakBrojem, pocetakInterpunkcijom, krajBrojem, krajInterpunkcijom) {

    let lozinka = ''

    for (let i = 0; i < duljina; i++) {

        let moguciZnakovi = znakovi

        if (i === 0 && pocetakBrojem) {
            moguciZnakovi = brojevi
        }

        if (i === 0 && pocetakInterpunkcijom) {
            moguciZnakovi = interpunkcija
        }

        if (i === duljina - 1 && krajBrojem) {
            moguciZnakovi = brojevi
        }

        if (i === duljina - 1 && krajInterpunkcijom) {
            moguciZnakovi = interpunkcija
        }

        let nasumicniIndeks = Math.floor(Math.random() * moguciZnakovi.length)
        let znak = moguciZnakovi[nasumicniIndeks]

        if (!dozvoliPonavljanje) {

            while (lozinka.includes(znak)) {
                nasumicniIndeks = Math.floor(Math.random() * moguciZnakovi.length)
                znak = moguciZnakovi[nasumicniIndeks]
            }

        }

        lozinka += znak
    }

    return lozinka
}


izvedi.addEventListener('click', () => {

    const duljinaLozinke = Number(duzina.value)
    const brojLozinki = Number(broj.value)


    if (!duzina.value) {
        rezultat.innerHTML = 'Obavezan unos dužine lozinke'
        return
    }

    if (!broj.value) {
        rezultat.innerHTML = 'Obavezan unos broja lozinki'
        return
    }

    if (duljinaLozinke <= 0) {
        rezultat.innerHTML = 'Dužina lozinke mora biti veća od 0'
        return
    }

    if (brojLozinki <= 0) {
        rezultat.innerHTML = 'Broj lozinki mora biti veći od 0'
        return
    }


    if (pocetakBroj.checked && !brojeviOpcija.checked) {
        rezultat.innerHTML = 'Ako lozinka počinje brojem, brojevi moraju biti uključeni'
        return
    }

    if (pocetakInterpunkcija.checked && !interpunkcijaOpcija.checked) {
        rezultat.innerHTML = 'Ako lozinka počinje interpunkcijskim znakom, interpunkcijski znakovi moraju biti uključeni'
        return
    }

    if (pocetakBroj.checked && pocetakInterpunkcija.checked) {
        rezultat.innerHTML = 'Lozinka ne može istovremeno početi brojem i interpunkcijskim znakom'
        return
    }


    if (krajBroj.checked && !brojeviOpcija.checked) {
        rezultat.innerHTML = 'Ako lozinka završava brojem, brojevi moraju biti uključeni'
        return
    }

    if (krajInterpunkcija.checked && !interpunkcijaOpcija.checked) {
        rezultat.innerHTML = 'Ako lozinka završava interpunkcijskim znakom, interpunkcijski znakovi moraju biti uključeni'
        return
    }

    if (krajBroj.checked && krajInterpunkcija.checked) {
        rezultat.innerHTML = 'Lozinka ne može istovremeno završavati brojem i interpunkcijskim znakom'
        return
    }


    const znakovi = napraviSkupZnakova()

    if (!znakovi) {
        rezultat.innerHTML = 'Odaberite barem jednu vrstu znakova'
        return
    }


    if (duljinaLozinke === 1 && pocetakBroj.checked && krajInterpunkcija.checked) {
        rezultat.innerHTML = 'Lozinka duljine 1 ne može početi brojem i završiti interpunkcijskim znakom'
        return
    }

    if (duljinaLozinke === 1 && pocetakInterpunkcija.checked && krajBroj.checked) {
        rezultat.innerHTML = 'Lozinka duljine 1 ne može početi interpunkcijskim znakom i završiti brojem'
        return
    }


    if (!ponavljanje.checked && duljinaLozinke > znakovi.length) {
        rezultat.innerHTML = 'Dužina lozinke je prevelika za odabrane znakove bez ponavljanja'
        return
    }


    let rezultatLozinke = ''

    for (let i = 0; i < brojLozinki; i++) {

        const lozinka = generirajLozinku(
            znakovi,
            duljinaLozinke,
            ponavljanje.checked,
            pocetakBroj.checked,
            pocetakInterpunkcija.checked,
            krajBroj.checked,
            krajInterpunkcija.checked
        )

        rezultatLozinke += lozinka + '<br>'
    }

    rezultat.innerHTML = rezultatLozinke
})