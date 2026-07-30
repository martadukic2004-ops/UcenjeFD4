

const zadaci = {
  z1: (a, b) => {
    console.log('Zadatak 1');
    // početak 1
    // 1. Ispiši apsolutnu vrijednost razlike brojeva A i B.

    if (!a || !b) {
      rezultat.innerHTML = 'Nije unesena vrijednost'
      return
    }

    const aBroj = Number(a)
    const bBroj = Number(b)
    let razlika = aBroj - bBroj

    if (!aBroj || !bBroj) {
      rezultat.innerHTML = 'a ili b nisu broj'
      return
    }

    if (razlika < 0) {
      razlika = razlika * -1
    }

    rezultat.innerHTML = razlika

    // kraj 1
  },
  z2: (a, b) => {
    console.log('Zadatak 2');
    // početak 2
    // 2. Ispiši veći broj od dva unesena cijela broja A i B.
    if (!a || !b) {
      rezultat.innerHTML = 'Nije unesena vrijednost'
      return
    }

    const aBroj = Number(a)
    const bBroj = Number(b)

    if (!aBroj) {
      rezultat.innerHTML = 'a nije broj'
      return
    }

    if (!bBroj) {
      rezultat.innerHTML = 'b nije broj'
      return
    }

    if (aBroj > bBroj) {
      rezultat.innerHTML = aBroj
      return
    }

    if (aBroj < bBroj) {
      rezultat.innerHTML = bBroj
      return
    }

    if (aBroj === bBroj) {
      rezultat.innerHTML = 'jednaki su'
      return
    }

    // kraj 2
  },
  z3: (a, b) => {
    console.log('Zadatak 3');
    // početak 3 
    // 3. U rezultatu napravi onoliko div elemenata koliko je uneseno u polje A te svaki drugi  div ima boju pozadine definiranu u polju B.



    // kraj 3
  },
  z4: (a, b) => {
    console.log('Zadatak 4');
    // početak 4
    // 4. Ako ostane polje A i B prazno u rezultat upišite dva emojia po vlastitom izboru

    if (a === '' && b === '') {
      rezultat.innerHTML = '😀🚀'
      return
    }

    rezultat.innerHTML = 'Polja nisu prazna'

    // kraj 4
  },


  z5: (a, b) => {
    console.log('Zadatak 5');
    // početak 5
    // 5. Osmislite zadatak sami i realizirajte ga
    // Ispiši zbroj a i b broja 

    if (a === '') {
      rezultat.innerHTML = 'Nije unesena vrijednost A'
      return
    }

    if (b === '') {
      rezultat.innerHTML = 'Nije unesena vrijednost B'
      return
    }

    const BrojA = Number(a)
    const BrojB = Number(b)

    if (isNaN(BrojA)) {
      rezultat.innerHTML = 'A nije broj'
      return
    }

    if (isNaN(BrojB)) {
      rezultat.innerHTML = 'B nije broj'
      return
    }

    if(b==='', isNaN(BrojA)){
      rezultat.innerHTML = 'Vrijednost A nije broj i vrijednost B nije unesena'
      return
    }

    if(a==='', isNaN(BrojB)){
      rezultat.innerHTML = 'Vrijednost A nije unesena, vrijednost B nije broj'
      return
    }

    if (isNaN(BrojB)) {
      rezultat.innerHTML = 'B nije broj'
      return
    }

    let zbroj = BrojA + BrojB

    rezultat.innerHTML = zbroj

    // kraj 5
  }
  // ovdje dodajemo nove zadatke
}


const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;
  if (!(('z' + zadatak) in zadaci)) {
    rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
    return;
  }
  // poziv funkcije u objektu
  zadaci['z' + zadatak](a, b);
});
