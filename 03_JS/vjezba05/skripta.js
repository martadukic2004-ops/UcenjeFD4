// uvjetno grananje if 
// if radi s boolean tipom podatka

const uvjet = true

//osnovna if sintaksa, ima samo if granu
if (uvjet) { //u if granu se ulazi ako je true
    console.log('uvjet je true')
}

//OVO NIKADA NE RADITI - RED FLAG
// if(uvjet==true){
//     console.log('NE, NE I NE ')
// }

//if i {} 
// ukoliko if se odnosi samo na jednu liniju, ne trebaju {}

if (uvjet)
    console.log('uvjet je true')
    // console.log('I OVO ŽELIM ISPISATI KADA JE UVJET TRUE') -> ovo će se izvesti uvijek, nije dio if-a

// standarna sintaksa
if(uvjet){
    //true grana
    console.log('Dobro je')
}else{
    //false grana
    console.log('NIJE dobro')
}

// puna sintaksa 
const ocjena = 5

if(ocjena===1){
    console.log('Nedovoljan')
}else if(ocjena===2){
    console.log('Dovoljan')
}else if(ocjena===3){
    console.log('Dobar')
}else if(ocjena===4){
    console.log('Vrlo dobar')
}else if(ocjena===5){
    console.log('Odličan')
}
//else if može biti koliko želimo
else{
    console.log('Broj nije ocjena')
}

//logički operatori AND, OR i OT
if(ocjena>=1 && ocjena<=5){
    console.log('Ocjena je valjana')
}

if(ocjena<1 || ocjena>5){
    console.log('Ocjena nije valjana')
}

if(!(ocjena<1 || ocjena>5)){
    console.log('Ocjena je valjana na drugi način')
}

//ternarni operator ?:
//inline if 
if(ocjena>=1 && ocjena<=5){
    console.log('Ocjena je valjana')
}else{
    console.log('Nije ocjena')
}

//kada if i else pozivaju istu funkciju {npr console.log}
console.log(ocjena>=1 && ocjena<=5) ? 'Ocjena je valjana inline' : 'Nije ocjena inline'

//JS specifičnosti
//falsy i truly

const ime = ''
if(!ime){//if(ime===''){
    console.log('ime nije postavljeno')
}else{
    console.log(ime)
}


const b = Number('aaaa')
console.log(b)

if(!b){
    console.log('Niste unjeli broj')
}

//truly
const x = 12
if(x){ //zaboravio staviti >=18
    console.log('Punoljetan je')
}