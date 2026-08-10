const gumb = document.getElementById('izvedi')

gumb.addEventListener('click', () => {
    const zadatak = document.getElementById('zadatak').value
    const a = document.getElementById('a').value
    const b = document.getElementById('b').value
    const rezultat = document.getElementById('rezultat')


    //početak 1. zadatka
    if (zadatak === '1') {
        //1. Izračun površine pravokutnika

        const aBroj = Number(a)
        const bBroj = Number(b)

        if (isNaN(aBroj)) {
            rezultat.innerHTML = 'Vrijednost A nije broj'
            return
        }

        if (isNaN(bBroj)) {
            rezultat.innerHTML = 'Vrijednost B nije broj'
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
            rezultat.innerHTML = 'Vrijednost A nije broj'
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
            rezultat.innerHTML = 'Vrijednosti u nizu moraju biti odvojene zarezima'
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
            rezultat.innerHTML = 'Vrijednost A nije broj'
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
    }
    //završetak 6. zadatka


    //početak 7. zadatka
    if (zadatak === '7') {
        //7. Brojanje samoglasnika
    }
    //završetak 7. zadatka


    //početak 8. zadatka
    if (zadatak === '8') {
        //8. Pretvorba temperature
    }
    //završetak 8. zadatka


    //početak 9. zadatka
    if (zadatak === '9') {
        //9. Sortiranje niza
    }
    //završetak 9. zadatka


    //početak 10. zadatka
    if (zadatak === '10') {
        //10. Kalkulator (zbrajanje, dijeljenje, množenje, oduzimanje)
    }
    //završetak 10. zadatka
})