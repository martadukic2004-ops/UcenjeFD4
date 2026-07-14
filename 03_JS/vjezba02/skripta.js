const ime = 'Pero' // prompt('Unesi ime')
console.log(ime)
console.log('ime', typeof ime, ime)

console.log(`
    Dobar dan ${ime} !!!!!!!
    `)

const unosBroj = '2026'
const broj = Number(unosBroj)
console.log('unosBroj', typeof unosBroj, unosBroj)
console.log('broj', typeof broj, broj)

const pi = parseFloat('3.14')
console.log('pi', typeof pi, pi)

const lv = true
console.log('lv', typeof lv, lv)

//pi = 3.1426   Uncaught TypeError: Assignment to constant variable.


let x = 7
console.log('x', typeof x, x)
x = 8
console.log('x', typeof x, x)
x = 'Osijek'
console.log('x', typeof x, x)


const vb = 8723487467823678378964786n
console.log('vb', typeof vb, vb)

//const i; Uncaught SyntaxError: Missing initializer in const declaration const mora imati definiranu vrijednost

let varijabla;
console.log('varijabla', typeof varijabla, varijabla)
varijabla = 7
console.log('varijabla', typeof varijabla, varijabla)


var t = 5
t = 'Osijek'
var t = true



const osoba = {
    id: 1,
    ime: 'Pero',
    visina: 182.5,
    znaProgramirati: true
}

console.log('osoba', typeof osoba)
console.table(osoba)


const niz = [2, 3, 4, 5, 7, 8, 1]
console.log('niz', typeof niz)
console.table(niz)

const json = [
    {
        color: "red",
        value: "#f00"
    },
    {
        color: "green",
        value: "#0f0"
    },
    {
        color: "blue",
        value: "#00f"
    },
    {
        color: "cyan",
        value: "#0ff"
    },
    {
        color: "magenta",
        value: "#f0f"
    },
    {
        color: "yellow",
        value: "#ff0"
    },
    {
        color: "black",
        value: "#000"
    }
]
console.table(json)


function pozdrav(){
    console.log('Pozdrav iz stare funkcije')
}
console.log('pozdrav', typeof pozdrav)


const pozdravi = () => console.log('Pozdrav iz nove funkcije')
console.log('pozdravi', typeof pozdravi)

pozdrav()
pozdravi()


const id1 = Symbol('edunova')
const id2 = Symbol('edunova')

console.log('7' == 7)
console.log('7' === 7)
console.log(7 === 7)

console.log(id1 == id2)
console.log(id1 === id2)