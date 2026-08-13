const izvedi = document.getElementById('izvedi')

izvedi.addEventListener('click', () => {

    const redoviInput = document.getElementById('redovi')
    const koloneInput = document.getElementById('kolone')
    const zadatakInput = document.getElementById('zadatak')
    const rezultat = document.getElementById('rezultat')

    const redovi = Number(redoviInput.value)
    const kolone = Number(koloneInput.value)
    const zadatak = Number(zadatakInput.value)

    if (redovi < 2 || redovi > 50) {
        rezultat.innerHTML = 'Broj redova mora biti između 2 i 50'
        return
    }

    if (kolone < 2 || kolone > 50) {
        rezultat.innerHTML = 'Broj kolona mora biti između 2 i 50'
        return
    }

    const matrica = []
    for (let i = 0; i < redovi; i++) {

        const red = []
        matrica.push(red)

        for (let j = 0; j < kolone; j++) {
            red.push(0)
        }

    }

    if (zadatak === 1) {
        //Početak 1. zadatka 
        // 1. Dolje desno početak u smjeru kazaljke na satu
    }
    //Završetak 1. zadatka 

    if (zadatak === 2) {
        //Početak 2. zadatka
        //2. Dolje lijevo početak u smjeru kazaljke na satu
    }
    //Završetak 2. zadatka

    if (zadatak === 3) {
        //Početak 3. zadatka
        //3. Gore lijevo početak u smjeru kazaljke na satu
    }
    //Završetak 3. zadatka

    if (zadatak === 4) {
        //Početak 4. zadatka
        //4. Gore desno početak u smjeru kazaljke na satu
    }
    //Završetak 4. zadatka

    if (zadatak === 5) {
        //Početak 5. zadatka
        //5. Dolje desno početak u kontra smjeru kazaljke na satu
    }
    //Završetak 5. zadatka

    if (zadatak === 6) {
        //Početak 6. zadatka
        //6. Dolje lijevo početak u kontra smjeru kazaljke na satu
    }
    //Završetak 6. zadatka

    if (zadatak === 7) {
        //Početak 7. zadatka
        //7. Gore lijevo početak u kontra smjeru kazaljke na satu
    }
    //Završetak 7. zadatka

    if (zadatak === 8) {
        //Početak 8. zadatka
        //8. gore desno početak u kontra smjeru kazaljke na satu
    }
    //Završetak 8. zadatka

    if (zadatak === 9) {
        //Početak 9. zadatka
        //9. Sredina lijevo u smjeru kazaljke na satu
    }
    //Završetak 9. zadatka

    if (zadatak === 10) {
        //Početak 10. zadatka
        //10. Sredina desno u smjeru kazaljke na satu
    }
    //Završetak 10. zadatka

    if (zadatak === 11) {
        //Početak 11. zadatka
        //11. Sredina gore u smjeru kazaljke na satu
    }
    //Završetak 11. zadatka

    if (zadatak === 12) {
        //Početak 12. zadatka
        //12. Sredina dolje u smjeru kazaljke na satu
    }
    //Završetak 12. zadatka

    if (zadatak === 13) {
        //Početak 13. zadatka
        //13. Sredina lijevo u kontra smjeru kazaljke na satu
    }
    //Završetak 13. zadatka

    if (zadatak === 14) {
        //Početak 14. zadatka
        //14. Sredina desno u kontra smjeru kazaljke na satu
    }
    //Završetak 14. zadatka

    if (zadatak === 15) {
        //Početak 15. zadatka
        //15. Sredina gore u kontra smjeru kazaljke na satu
    }
    //Završetak 15. zadatka

    if (zadatak === 16) {
        //Početak 16. zadatka
        //16. Sredina dolje u kontra smjeru kazaljke na satu
    }
    //Završetak 16. zadatka

    let html = '<table>'

    for (let i = 0; i < redovi; i++) {
        html += '<tr>'

        for (let j = 0; j < kolone; j++) {
            html += '<td>' + matrica[i][j] + '</td>'
        }

        html += '</tr>'
    }

    html += '</table>'

    rezultat.innerHTML = html

})