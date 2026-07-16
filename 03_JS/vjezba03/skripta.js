//MOJ PRVI PROGRAM
//ULAZ
const a = 7// const a = parseInt(prompt('Unesi prvi broj'))
const b = 3// const b = parseInt(prompt('Unesi drugi broj'))

//ALGORITAM
let rez = a + b

//IZLAZ
console.log(a, '+', b, '=', rez)
console.log(`${a} + ${b} = ${rez}`)  //ispravniji način zapisivanja, isto sve za -, * i /


console.log(9 % 2)
console.log(8 % 2)


rez = rez + 2
console.log(rez)

rez += 2
console.log(rez)


let i = 0
i = i + 1
i += 1
i++
console.log(i)

i = 0
//prvo koristi pa uvećaj
console.log(i++)
//prvo uvećaj pa koristi
console.log(++i)


//zna biti na razgovorima za posao
i = 2
let j = 1
i = j++ - i  //1 - 2 = -1, i = -1, j = 2
j += --i - ++j // i = -2 -3 = -5, j = 3 + -5 = -2, i = -2, j = -3
console.log(i - j) // -2 --3

// == === ->isto po vrijednosti, isto po vrijednosti i tipu, !=, !== -> različito po vrijednosti, različito po vrijednosti i tipu
console.log('5' != 4)
console.log(5 != 5)
console.log('5' !== 5)
console.log(5 !== 5)

const uvjet = 5 !== 5
console.log('uvjet', typeof uvjet, uvjet)


//operatori <,>, <=, >=

const godine = 18
console.log(godine > 18)
console.log(godine >= 18)
// npr. online kupnja alkohola

//logički operatori (logički tip podatkda boolean)
//AND, OR i NOT
//&& -> AND, || (Alt Gr + W) -> OR, ! -> NOT   --> U JS se ne smije koristiti & za logičko i jer je & binarno množenje
const punoljetan = godine >= 18
console.log(uvjet && punoljetan) //false i true će uvijek dati false, vrijede pravila boolovih tablica  https://introcs.cs.princeton.edu/java/71boolean/images/truth-table.png

console.log(uvjet || punoljetan) //true 
console.log(!uvjet) //uvjet je prije bio false, sad će se ispisati true
console.log(uvjet, !uvjet)


//operator spajanja (CONCATENATE -> funkcija u Excelu primjer)
//kada se + koristi kod dva broja zbrajaja se, kada se + koristi kod različitih tipova podataka -> spajaju se 
console.log('Pero ima' + godine + 'godina')
console.log(`Pero ima ${godine} godina`)
const x = '7', y = 5
console.log(x + y) //75, vrijednost string i broj su se spojili 


//spread operator -> operator proširivanja -> ...
const niz = [1, 2]
console.table(niz)

const noviNiz = [0, ...niz, 3]
console.table(noviNiz)

//proširivanje objekta
const osoba = {
    ime: 'Pero',
    prezime: 'Perić'
}
console.table(osoba)

const polaznik = {
    ...osoba,
    edukacija: 'FD'
}
console.table(polaznik)


//suprotno od spread je destructing operator -> operator destrukcije
const [prvi, drugi] = [1, 2]
// varijabla prvi ima vrijednost 1, a varijabla drugi ima vrijednost 2
console.log(prvi, drugi)

// destrukcija objekta 
const { prezime, ...meniBitno } = polaznik
console.table(meniBitno)


// nullish calescing operator (??), varijabla može imati vrijednost undefined
let sifra
console.log(sifra ?? 'Šifra nije postavljena')
sifra = '12345'
console.log(sifra ?? 'Šifra nije postavljena')


// optional chaining operator ?.
// što radi . 
const korisnik = {
    adresa: {
        grad: 'Osijek'
        // ulica: 'Trg'
    }
}
console.log(korisnik.adresa.grad.toUpperCase()) //. koristi da pristupam svojstvima i metodama (funkcijama) na objektima
// ?. omogućava da kod ne pukne 
console.log(korisnik?.adresa?.ulica?.toUpperCase() ?? 'Nije postavljeno')