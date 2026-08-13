const mojeIme = document.getElementById('mojeIme')
const imeSimpatije = document.getElementById('imeSimpatije')
const izracunaj = document.getElementById('izracunaj')
const rezultat = document.getElementById('rezultat')


izracunaj.addEventListener('click', function () {

    let ime1 = mojeIme.value.toUpperCase()
    let ime2 = imeSimpatije.value.toUpperCase()

    if (ime1 === '' || ime2 === '') {
        rezultat.innerHTML = 'Molim vas unesite imena u navedena polja'
        return
    }

    let niz1 = napraviNiz(ime1, ime2)
    let ljubav1 = izracunajLjubav(niz1)

    let niz2 = napraviNiz(ime2, ime1)
    let ljubav2 = izracunajLjubav(niz2)

    let ljubav = Math.max(ljubav1, ljubav2)

    rezultat.innerHTML = ljubav + '%'

})


function napraviNiz(ime1, ime2) {

    let imena = ime1 + ime2

    let red1 = []

    for (let i = 0; i < ime1.length; i++) {

        let broj = prebrojiSlovo(ime1[i], imena)

        red1.push(broj)
    }

    let red2 = []

    for (let i = 0; i < ime2.length; i++) {

        let broj = prebrojiSlovo(ime2[i], imena)

        red2.push(broj)
    }

    return [...red1, ...red2]
}


function prebrojiSlovo(slovo, imena) {

    let broj = 0

    for (let i = 0; i < imena.length; i++) {

        if (imena[i] === slovo) {
            broj++
        }
    }

    return broj
}


function noviRed(niz) {

    let rezultat = []

    for (let i = 0; i < Math.floor(niz.length / 2); i++) {

        let prvi = niz[i]
        let zadnji = niz[niz.length - 1 - i]

        let zbroj = prvi + zadnji

        if (zbroj >= 10) {

            let znamenke = zbroj.toString()

            for (let j = 0; j < znamenke.length; j++) {
                rezultat.push(Number(znamenke[j]))
            }

        } else {

            rezultat.push(zbroj)
        }
    }

    if (niz.length % 2 !== 0) {

        let sredina = niz[Math.floor(niz.length / 2)]

        if (sredina >= 10) {

            let znamenke = sredina.toString()

            for (let j = 0; j < znamenke.length; j++) {
                rezultat.push(Number(znamenke[j]))
            }

        } else {

            rezultat.push(sredina)
        }
    }

    return rezultat
}


function izracunajLjubav(niz) {

    if (niz.length <= 2) {
        return niz[0] * 10 + niz[1]
    }

    let novi = noviRed(niz)

    return izracunajLjubav(novi)
}