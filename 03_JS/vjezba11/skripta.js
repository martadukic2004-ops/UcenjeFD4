
const isDev = true


odradi()

function odradi() {
    let i = 0
    i += 3
    console.log('poziv funkcije 1. odradi', i)
}

odradi()


document.getElementById('gumb2').addEventListener('click', odradi)

document.getElementById('gumb3').addEventListener('click', function () {
    console.log('poziv iz bezimene funkcije')
})


function parniBrojevi(odBroja, doBroja) {
    for (let i = odBroja; i <= doBroja; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

parniBrojevi(2, 8)
parniBrojevi(100, 110)



function log(poruka) {
    if (!isDev) {
        return
    }
    console.log('\n')   // \ Altgr + Q je escape znak a \n je novi red 
    console.log('+-----------------------------------+')
    console.log(poruka)
    console.log('+-----------------------------------+')
}

log('testiranje log funkcije')
log('Edunova')



/**
 * funkcija radi kako je opisano
 * - bez parametara decimalan slučajni broj između 0 i 1
 * - jedan parametar cijeli broj od 0 do parametra 
 * - dva parametra cijeli broj između prvog i drugog parametra 
 * @param {*} odBroja cijeli broj
 * @param {*} doBroja cijeli broj
 * @returns slučajni broj 
 */
function slucajniBroj(odBroja = 0, doBroja = 0) {
    if (odBroja && doBroja) {
        return (Math.random() * (doBroja - odBroja) + odBroja).toFixed(0)
    }

    if (odBroja && !doBroja) {
        return (Math.random() * odBroja).toFixed(0)
    }
    return Math.random()
}

slucajniBroj()

const sb = slucajniBroj()

log(sb)
log(slucajniBroj())

for (let i = 0; i < 6; i++) {                             // doradit kod da ne ispisuje duple brojeve 
    console.log(slucajniBroj(1, 45))
}

log(slucajniBroj(20))




function zbrojPrimBrojeva(odBroja, doBroja, ispis = false) {
    let suma = 0, prim = false
    for (let i = odBroja; i <= doBroja; i++) {
        if (i < 2) {
            continue
        }
        prim = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prim = false
                break
            }
        }
        if (prim) {
            if(ispis){
                console.log(i)
            }
            suma += i
        }
    }
    return suma
}
log(zbrojPrimBrojeva(-2, 10))

log(zbrojPrimBrojeva(100, 120, true))



const ime = 'pero'
log(ime.charCodeAt(0))


log(ime.toUpperCase())


console.log('Primio parametar a nije vratio vrijednost')



function zbroji(broj){
    if(broj ===1){
        return 1
    }
    return broj + zbroji(broj-1)
}

log(zbroji(100))



const hello = () => log('Arrow hello')
hello()

const brojevi = (a,b) => {
    const c = a + b
    return[a, b, c]
}

log(brojevi(1,2))



;(()=>{
    console.log('bezimena funkcija koja se nakon definiranja odmah pozove')
})()