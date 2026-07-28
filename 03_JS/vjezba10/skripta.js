while(true){
    console.log('Edunova')
    break
}


let brojac = 0

console.time('while petlja')
let suma = 0

while(brojac++ < 100){
    //console.log(brojac) 
    suma+=brojac
}
console.timeEnd('while petlja')
console.log(suma)



const brojUnos = '1262'
suma = 0

console.time('ZB1')

for(let i=0; i<brojUnos.length; i++){
    suma+= Number(brojUnos[i])
}
console.timeEnd('ZB1')
console.log(suma)



console.time('ZB2')

let broj = Number(brojUnos)
suma = 0
while(broj>0){
    suma+= broj % 10
    broj= broj - (broj % 10)
    broj /= 10
}
console.timeEnd('ZB2')
console.log('suma')



const x = 5
for(let i = 0; i>x; i++){
    console.log('usao u petlju')
}

const podaciAPI = [
    {
        ime: 'Pero'
    },
    {
        ime: 'Marko'
    },
    {
        ime: 'Marija'
    }
]

while(podaciAPI.length>0){
    console.log('usao u petlju', podaciAPI.pop()?.ime)
}



