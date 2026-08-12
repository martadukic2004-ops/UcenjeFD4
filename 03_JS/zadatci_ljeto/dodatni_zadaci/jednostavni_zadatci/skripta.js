const gumb = document.getElementById('izvedi')
const rezultat = document.getElementById('rezultat')

const odabirZadatka = document.getElementById('zadatak')

const poljeA = document.getElementById('poljeA')
const poljeB = document.getElementById('poljeB')
const poljeOperacija = document.getElementById('poljeOperacija')
const poljePretvorba = document.getElementById('pretvorba')

const labelA = document.getElementById('labelA')
const labelB = document.getElementById('labelB')

const upute = document.getElementById('upute')


odabirZadatka.addEventListener('change', () => {

    const zadatak = odabirZadatka.value

    if (zadatak === '1') {

        poljeA.style.display = ''
        poljeB.style.display = ''
        poljeOperacija.style.display = 'none'
        document.getElementById('b').style.display = ''
        poljePretvorba.style.display = 'none'

        labelA.innerHTML = 'Duljina'
        labelB.innerHTML = 'Širina'

        upute.innerHTML = 'Unesite duljinu i širinu pravokutnika'
    }

    if (zadatak === '2') {

        poljeA.style.display = ''
        poljeB.style.display = 'none'
        poljeOperacija.style.display = 'none'
        document.getElementById('b').style.display = ''
        poljePretvorba.style.display = 'none'

        labelA.innerHTML = 'Unesite broj'

        upute.innerHTML = 'Unesite broj koji želite provjeriti.'
    }

    if (zadatak === '3') {

        poljeA.style.display = ''
        poljeB.style.display = 'none'
        poljeOperacija.style.display = 'none'
        document.getElementById('b').style.display = ''
        poljePretvorba.style.display = 'none'

        labelA.innerHTML = 'Unesite brojeve'

        upute.innerHTML = 'Unesite više brojeva odvojenih zarezima.'
    }

    if (zadatak === '4') {

        poljeA.style.display = ''
        poljeB.style.display = ''
        poljeOperacija.style.display = 'none'
        document.getElementById('b').style.display = ''
        poljePretvorba.style.display = 'none'

        labelA.innerHTML = 'Broj ocjena'
        labelB.innerHTML = 'Ocjene'

        upute.innerHTML = 'Unesite broj ocjena u A, a ocjene u B odvojene zarezima.'
    }

    if (zadatak === '5') {

        poljeA.style.display = ''
        poljeB.style.display = 'none'
        poljeOperacija.style.display = 'none'
        document.getElementById('b').style.display = ''
        poljePretvorba.style.display = 'none'

        labelA.innerHTML = 'Broj elemenata'

        upute.innerHTML = 'Unesite koliko elemenata Fibonaccijevog niza želite ispisati.'
    }

    if (zadatak === '6') {

        poljeA.style.display = ''
        poljeB.style.display = 'none'
        poljeOperacija.style.display = 'none'
        document.getElementById('b').style.display = ''
        poljePretvorba.style.display = 'none'

        labelA.innerHTML = 'Unesite tekst'

        upute.innerHTML = 'Unesite tekst koji želite preokrenuti.'
    }

    if (zadatak === '7') {

        poljeA.style.display = ''
        poljeB.style.display = 'none'
        poljeOperacija.style.display = 'none'
        document.getElementById('b').style.display = ''
        poljePretvorba.style.display = 'none'

        labelA.innerHTML = 'Unesite tekst'

        upute.innerHTML = 'Unesite tekst u kojem želite prebrojati samoglasnike.'
    }

    if (zadatak === '8') {

        poljeA.style.display = ''
        poljeB.style.display = ''
        poljeOperacija.style.display = 'none'

        labelA.innerHTML = 'Temperatura'
        labelB.innerHTML = 'Pretvorba'

        document.getElementById('b').style.display = 'none'
        poljePretvorba.style.display = ''

        upute.innerHTML = 'Unesite temperaturu i odaberite smjer pretvorbe.'
    }

    if (zadatak === '9') {

        poljeA.style.display = ''
        poljeB.style.display = 'none'
        poljeOperacija.style.display = 'none'
        document.getElementById('b').style.display = ''
        poljePretvorba.style.display = 'none'

        labelA.innerHTML = 'Unesite brojeve'

        upute.innerHTML = 'Unesite više brojeva odvojenih zarezima. Brojevi će biti sortirani uzlazno.'
    }

    if (zadatak === '10') {

        poljeA.style.display = ''
        poljeB.style.display = ''
        poljeOperacija.style.display = ''
        document.getElementById('b').style.display = ''
        poljePretvorba.style.display = 'none'

        labelA.innerHTML = 'Prvi broj'
        labelB.innerHTML = 'Drugi broj'

        upute.innerHTML = 'Unesite dva broja i odaberite matematičku operaciju.'
    }

})


odabirZadatka.dispatchEvent(new Event('change'))


gumb.addEventListener('click', () => {

    const zadatak = odabirZadatka.value
    const a = document.getElementById('a').value
    const b = document.getElementById('b').value

    //početak 1. zadatka
    if (zadatak === '1') {
        //1. Izračun površine pravokutnika

        const aBroj = Number(a)
        const bBroj = Number(b)

        if (isNaN(aBroj)) {
            rezultat.innerHTML = 'Unesena duljina nije broj'
            return
        }

        if (isNaN(bBroj)) {
            rezultat.innerHTML = 'Unesena širina nije broj'
            return
        }

        const povrsina = aBroj * bBroj

        rezultat.innerHTML = povrsina
    }
    //završetak 1. zadatka


    //početak 2. zadatka
    if (zadatak === '2') {
        //2. Provjera jeli broj pozitivan, negativan ili jednak nuli

        const brojA = Number(a)

        if (isNaN(brojA)) {
            rezultat.innerHTML = 'Uneseni podatak nije broj'
            return
        }

        if (brojA > 0) {
            rezultat.innerHTML = 'Broj je pozitivan'
            return
        }

        if (brojA < 0) {
            rezultat.innerHTML = 'Broj je negativan'
            return
        }

        if (brojA === 0) {
            rezultat.innerHTML = 'Broj je jednak nuli'
            return
        }
    }
    //završetak 2. zadatka


    //početak 3. zadatka
    if (zadatak === '3') {
        //3. Zbroj elemenata niza

        const niz = a.split(',')
        let zbroj = 0

        if (!a.includes(',')) {
            rezultat.innerHTML = 'Podatci u nizu moraju biti odvojene zarezima'
            return
        }

        for (let i = 0; i < niz.length; i++) {

            const broj = Number(niz[i])

            if (!isNaN(broj)) {
                zbroj = zbroj + broj
            }
        }

        rezultat.innerHTML = zbroj
    }
    //završetak 3. zadatka


    //početak 4. zadatka
    if (zadatak === '4') {
        //4. Prosjek ocjena

        const brojOcjena = Number(a)
        const ocjene = b.split(',')

        if (!b.includes(',')) {
            rezultat.innerHTML = 'Ocjene moraju biti odvojene zarezima'
            return
        }

        if (brojOcjena !== ocjene.length) {
            rezultat.innerHTML = 'Broj ocjena ne odgovara broju unesenih ocjena'
            return
        }

        let zbroj = 0

        for (let i = 0; i < ocjene.length; i++) {

            const ocjena = Number(ocjene[i])

            if (isNaN(ocjena)) {
                rezultat.innerHTML = 'Sve ocjene moraju biti unesene kao brojevi'
                return
            }

            zbroj = zbroj + ocjena
        }

        const prosjek = zbroj / brojOcjena

        rezultat.innerHTML = prosjek

    }
    //završetak 4. zadatka


    //početak 5. zadatka
    if (zadatak === '5') {
        //5. Ispis Fibonaccijevog niza

        const n = Number(a)

        if (isNaN(n)) {
            rezultat.innerHTML = 'Uneseni podatci nisu brojevi'
            return
        }

        if (n <= 0) {
            rezultat.innerHTML = 'Broj mora biti veći od 0'
            return
        }

        if (n === 1) {
            rezultat.innerHTML = 0
            return
        }

        const niz = [0, 1]

        for (let i = 2; i < n; i++) {

            const sljedeci = niz[niz.length - 2] + niz[niz.length - 1]

            niz.push(sljedeci)
        }

        rezultat.innerHTML = niz
    }
    //završetak 5. zadatka


    //početak 6. zadatka
    if (zadatak === '6') {
        //6. Preokret stringa

        const tekst = a

        if (tekst === '') {
            rezultat.innerHTML = 'Morate unijeti tekst'
            return
        }

        let obrnutiTekst = ''

        for (let i = tekst.length - 1; i >= 0; i--) {

            obrnutiTekst = obrnutiTekst + tekst[i]

        }

        rezultat.innerHTML = obrnutiTekst
    }
    //završetak 6. zadatka


    //početak 7. zadatka
    if (zadatak === '7') {
        //7. Brojanje samoglasnika

        const tekst = a.toLowerCase()

        if (tekst === '') {
            rezultat.innerHTML = 'Morate unijeti tekst'
            return
        }

        const samoglasnici = 'aeiou'
        let brojac = 0

        for (let i = 0; i < tekst.length; i++) {

            const znak = tekst[i]

            if (samoglasnici.includes(znak)) {

                brojac++

            }
        }

        rezultat.innerHTML = brojac
    }
    //završetak 7. zadatka


    //početak 8. zadatka
    if (zadatak === '8') {
        //8. Pretvorba temperature

        const temperatura = Number(a)

        if (isNaN(temperatura)) {
            rezultat.innerHTML = 'Temperatura mora biti broj'
            return
        }

        if (b === 'CtoF') {

            const fahrenheit = temperatura * 9 / 5 + 32

            rezultat.innerHTML = fahrenheit
        } else if (b === 'FtoC') {

            const celzijus = (temperatura - 32) * 5 / 9

            rezultat.innerHTML = celzijus

        } else {
            rezultat.innerHTML = 'Odaberite ispravnu pretvorbu'
            return
        }
    }
    //završetak 8. zadatka


    //početak 9. zadatka
    if (zadatak === '9') {
        //9. Sortiranje niza

        const niz = a.split(',')

        if (!a.includes(',')) {
            rezultat.innerHTML = 'Vrijednosti u nizu moraju biti odvojene zarezima'
            return
        }

        for (let i = 0; i < niz.length; i++) {

            niz[i] = Number(niz[i])

            if (isNaN(niz[i])) {
                rezultat.innerHTML = 'Sve vrijednosti u nizu moraju biti brojevi'
                return
            }

        }

        niz.sort((a, b) => a - b)

        rezultat.innerHTML = niz
    }
    //završetak 9. zadatka


    //početak 10. zadatka
    if (zadatak === '10') {
        //10. Kalkulator (zbrajanje, dijeljenje, množenje, oduzimanje)

        const numeroA = Number(a)
        const numeroB = Number(b)

        if (isNaN(numeroA)) {
            rezultat.innerHTML = 'Vrijednost A nije broj'
            return
        }

        if (isNaN(numeroB)) {
            rezultat.innerHTML = 'Vrijednost B nije broj'
            return
        }

        const operacija = document.getElementById('operacija').value

        switch (operacija) {

            case '+':
                const suma = numeroA + numeroB
                rezultat.innerHTML = suma
                break

            case '-':

                const razlika = numeroA - numeroB
                rezultat.innerHTML = razlika
                break

            case '/':

                const dijeljenje = numeroA / numeroB

                if (numeroB === 0) {
                    rezultat.innerHTML = 'Dijeljenje s nulom nije dozvoljeno'
                    return
                }

                rezultat.innerHTML = dijeljenje
                break

            case '*':
                const umnozak = numeroA * numeroB
                rezultat.innerHTML = umnozak
                break
        }
    }
    //završetak 10. zadatka

})