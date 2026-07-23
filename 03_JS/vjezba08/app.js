

/* =================================================
   ZADATAK 1 — Prvi i zadnji element
   - niz se gradi od A i B (plus dva fiksna elementa radi smisla)
   Ulaz primjer: [A, 20, 30, B]
   Izlaz: Prvi: A, Zadnji: B
================================================= */

document.getElementById('zad01').addEventListener('click', () => {
   console.log("ZADATAK 1 — Prvi i zadnji element")
   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   const niz = [!a ? `Prazno` : a, 20, 30, !b ? `Prazno` : b]

   console.log(niz)
   console.log(`Prvi: ${niz[0]}, Zadnji: ${niz[niz.length - 1]}`)
})

/* =================================================
   ZADATAK 2 — Siguran pristup elementu
   U danom nizu [1,2,3,4,5,6,7]
   - Ako je A broj postavi vrijednost B na taj index
   - Ako je A string u niz dodaj novi element i postavi B na taj index
================================================= */
document.getElementById('zad02').addEventListener('click', () => {
   console.log("ZADATAK 2 — Siguran pristup elementu")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value
   const zad = [1, 2, 3, 4, 5, 6, 7]

   // if (!isNaN(a)){
   //    zad[Number(a)] = b
   // }else {
   //    zad.push(b)
   // }

   const ab = Number(a)
   if (!ab) {
      //a je string
      zad.length = zad.length + 1
      zad[zad.length - 1] = b
   } else {
      //a je broj, koristim ab
      zad[ab] = b
   }

   console.log(zad)

})


/* =================================================
   ZADATAK 3 — Zamjena prva dva elementa
   Unesi podatke A i B u niz [A, B, 3]
   - ispiši niz
   - zamijeni prva dva elemente
   - ispiši niz
================================================= */
document.getElementById('zad03').addEventListener('click', () => {
   console.log("ZADATAK 3 — Zamjena prva dva elementa")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value
   const zad = [a, b, 3]

   console.log(zad)

   const ba = zad[0]
   zad[0] = zad[1]
   zad[1] = ba

   console.log(zad)
})


/* =================================================
   ZADATAK 4 — Dodavanje elementa prema duljini
   - niz: [A, B]
   - ako je A string i duljina(A) < 3 → dodaj "X" na kraj
     inače → dodaj "Y" na početak
================================================= */
document.getElementById('zad04').addEventListener('click', () => {
   console.log("ZADATAK 4 — Dodavanje elementa prema duljini")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value
   const niz = [a, b]

   const ab = Number(a)
   if (!ab && a.length < 3) {
      niz.push('x')
   } else {
      niz.unshift('Y')  // niz = ['Y',...niz]
   }

   console.log(niz)
})


/* =================================================
   ZADATAK 5 — Provjera tipa prvog elementa
   - ako je A broj 7 na prvi elementi niza podatvi true, inače 0
   - ako je B tekst Osijek na drugi element postavi B, inače 2,5
   - koristeći elemente niza ispiši kojeg su tipa
================================================= */
document.getElementById('zad05').addEventListener('click', () => {
   console.log("ZADATAK 5 — Provjera tipa elemenata")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   let PE, DE

   if (a === '7') {
      PE = true
   } else {
      PE = 0
   }

   if (b === 'Osijek') {
      DE = 'B'
   } else {
      DE = 2.5
   }

   const niz = [PE, DE]
   console.log(niz)

   //1. alt rješenje
   //const PE = a===7 ? true : 0
   //const DE = b==='Osijek' ? 'B' : 2.5
   //const niz = [PE, DE]
   //console.log(niz)

   //2. alt rješenje 
   //const niz = [
   // a===7 ? true : 0,
   //b==='Osijek' ? 'B' : 2.5
   //]
   //console.log(niz)

   //3. alt rješenje
   //console.log([
   //a===7 ? true : 0
   //b==='Osijek' ? 'B' : 2.5
   //])

   //console.log([
   //document.getElementById('inA').value === '7' ? true : 0, 
   //document.getElementById('inB').value === 'Osijek' ? 'B' : 2.5
   // ])
})

/* =================================================
   ZADATAK 6 — Ukloni zadnji element 
  Vrijednosti A i B se unose u niz [A, B, 'KRAJ']
================================================= */
document.getElementById('zad06').addEventListener('click', () => {
   console.log("ZADATAK 6 — Ukloni zadnji element")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value


})

/* =================================================
   ZADATAK 7 — Spoji dva niza
   - niz1: [A, 2]
   - niz2: [B, 4]
   - spajanje spreadom
================================================= */
document.getElementById('zad07').addEventListener('click', () => {
   console.log("ZADATAK 7 — Spoji dva niza")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

})

/* =================================================
   ZADATAK 8 — Provjera rupe u nizu
   - napravimo niz sa "rupom" na indeksu 1:
     niz[0]=A, niz[2]=B
   - provjerimo indeks 1
================================================= */
document.getElementById('zad08').addEventListener('click', () => {
   console.log("ZADATAK 8 — Provjera rupe u nizu")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

})

/* =================================================
   ZADATAK 9 — Razdvajanje prvog i ostatka
   - niz: [A, B, 7, 6]
   - destructuring [prvi, ...ostatak]
================================================= */
document.getElementById('zad09').addEventListener('click', () => {
   console.log("ZADATAK 9 — Razdvajanje prvog i ostatka")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

})

/* =================================================
   ZADATAK 10 — prema duljini niza
   - duljinu određujemo prema A i B:
     Ako je A prazan string ili B prazan string → niz = []
     Inače ako A === B → niz = [A]
     Inače ako je B broj i B === 2 → niz = [A, B]
     Inače → niz = [A, B, "x"]
================================================= */
document.getElementById('zad10').addEventListener('click', () => {
   console.log("ZADATAK 10 — prema duljini niza")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

})
