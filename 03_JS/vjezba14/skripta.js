// funkcionalne metode
// skraćuju kod, danas se standardno koriste
// prvo nam trebaju podaci

const korisnici = [
    {
        id: 1,
        ime: 'Ana',
        prezime: 'Kartek',
        godine: 25,
        admin: false  // na zadnje ne mora ali može doći zarez
    },
    {
        id: 2,
        ime: 'Karlo',
        prezime: 'Kotig',
        godine: 29,
        admin: false
    },
    {
        id: 3,
        ime: 'Marko',
        prezime: 'Ćutić',
        godine: 45,
        admin: true
    },
    {
        id: 4,
        ime: 'Nikolina',
        prezime: 'Ćutić',
        godine: 49,
        admin: true
    },
    {
        id: 5,
        ime: 'Žana',
        prezime: 'Đitko',
        godine: 18,
        admin: false
    }
]

console.table(korisnici)


// forEach() - zamjenjuje/ skraćuje for petlju
// ispisati imena korisnika

for (let i = 0; i < korisnici.length; i++) {
    console.log(korisnici[i].ime)
}


console.log('****************************')

korisnici.forEach(korisnik => console.log(korisnik.ime))


console.log('****************************')

korisnici.forEach(o => console.log(`${o.ime} ${o.prezime}`))


console.log('****************************')

korisnici.forEach(o => {
    let oslovi = 'Poštovan'
    if (o.ime.endsWith('a')) {
        oslovi += 'a gospođo'
    } else {
        oslovi += 'i gospodine'
    }
    console.log(`${oslovi} ${o.ime} ${o.prezime}, obraćam Vam se ispred.....`)
})


console.log('****************************')

korisnici.forEach(o => console.log(`Poštovan ${o.ime.endsWith('a') ? 'a gospođo' : 'i gospodine'} ${o.ime} ${o.prezime}`))


console.log('****************************')

// map()
// želim iz niza korisnici napraviti novi niz koji ima samo imena 

const imena = korisnici.map(o => o.ime)
console.table(imena)


console.log('****************************')

// funkcionalne metode se mogu pozivati lančano

korisnici.map(o => o.ime).forEach(s => console.log(s))


console.log('****************************')
// Medium portal za čitati stvari o FD-u ili BD-u

console.table(korisnici.map(o => o.ime + ' ' + o.prezime))


console.log('****************************')

// mjenjanje kompletne strukture (premapiranje)

const mojaStruktura =
    korisnici.map(({ id, ime, prezime }) => ({ sifra: id, osoba: ime + ' ' + prezime }))

console.table(mojaStruktura)


console.log('****************************')

// find() 
console.log(korisnici.find(o => o.id === 13)?.ime ?? 'Ne postoji') // u slučaju više rezultat uzme prvi
// zed editor - isto ko VSC, radi brže, vezano uz AI


console.log('****************************')

// traži id prema imenu i prezimenu

console.log(korisnici.find(o => o.ime === 'Ana' && o.prezime === 'Kartek').id)


console.log('****************************')

// find index 

console.log(mojaStruktura.findIndex(o => o.sifra === 2)) // -1 oznacava da ne postoji


console.log('****************************')

// filter()

console.table(korisnici.filter(o => o.godine > 40))


console.log('****************************')

// reduce()
// zbroji sve godine korisnika

console.log(korisnici.reduce((suma, o) => suma + o.godine, 0)) // 0 je početna vrijednost suma

let suma = 0
korisnici.forEach(o => suma += o.godine)
console.log(suma)

suma = 0
for(let i = 0; i < korisnici.length; i++){
    suma += korisnici[i].godine
}
console.log(suma)


console.log('****************************')

// some()

console.log(korisnici.some(o => o.admin) ? 'Ima admina' : 'Nema admina')


console.log('****************************')

// every()
console.log(korisnici.every(o => o.godine >= 18) ? 'Svi su punoljetni' : 'Nisu svi punoljetni')