// OOP - Objektno Orijentirano Programiranje
// princip klasa - objekt
// naučiti napamet što je klasa i što je objekt

// izjava 1: Klasa je opisnik objekta

class Osoba {
    // OOP princip učahurivanja (encapsulation)

    //1. klasa skriva svoja svojstva
    #ime // # označava da se radi o skrivenom privatnom svojstvu

    // 2. klasa će učiniti svoja svojstva dostupna putem get set metoda
    get ime() { return this.#ime }
    set ime(s) { this.#ime = s }

    // konstruktor koji se poziva ključnom rječju new
    constructor(ime = '') {
        this.#ime = ime
    }
}


// izjava 2: Objekt je pojavnost (instanca) klase
// varijabla osoba je instanca klase Osoba
const osoba = new Osoba()
osoba.ime = 'Pero'  // ovdje se poziva set

const oJson = {
    ime: ' '
}

oJson.ime = 'Patricija'

console.log(osoba.ime, oJson.ime)

const o = new Osoba('Marko') // ovdje se poziva konstruktor

console.log(o.ime) // ovdje se poziva get

const datum = new Date(2026, 0, 1)
console.log(datum.toLocaleString('hr-HR'))


// OOP princip je nasljeđivanje 


// klasa će nasljediti metode nadklase, jedna klasa može nasljediti samo jednu nadklasu
class Polaznik extends Osoba {
    #odradioObaveze
    get odradioObaveze() { return this.#odradioObaveze }
    set odradioObaveze(b) { this.#odradioObaveze }
    constructor(ime = '', oo = false) {
        super(ime) // ime osobe prosljeđujem konstruktoru klase Osoba, on će znati što s tim
        this.odradioObaveze = oo
    }
}

const polaznik = new Polaznik()
polaznik.ime = 'Darija'
polaznik.odradioObaveze = true


console.log(`${polaznik.ime} ${polaznik.odradioObaveze ? 'je' : 'nije'} odradioObaveze`)

console.log(polaznik)
console.log(`${polaznik}`)

class Predavac extends Osoba {
    #vrsta
    get vrsta() { return this.#vrsta }
    set vrsta(s) { this.#vrsta = s }
    // klasa ne mora imati konstruktor

    toString() {
        return `${this.#vrsta} ${super.ime}`
    }
}

const pr = new Predavac()
pr.ime = 'Gordana'
pr.vrsta = 'Vanjska suradnica'

console.log(`${pr}`)

// čitanje o OOP principima https://github.com/tjakopec/OOP_JAVA_PHP_PYTHON_SWIFT

// metode u klasi se koriste na objektima a ne na klasi
// ako želimo metodu s klase koristiti direktno (samo izvršavanje algoritma)
// tada ta metoda mora biti statična 

class Pomocno {
    static slucanjniBroj(odBroja = 0, doBroja = 0) {
        
            if (odBroja && doBroja) {
                return (Math.random() * (doBroja - odBroja) + odBroja).toFixed(0)
            }

            if (odBroja && !doBroja) {
                return (Math.random() * odBroja).toFixed(0)
            }
            return Math.random()
        }

    }

    console.log(Pomocno.slucanjniBroj(2,8))
    console.log(Pomocno.slucanjniBroj(10))
    console.log(Pomocno.slucanjniBroj())

    console.log(Math.random())
    console.log(Date.now())