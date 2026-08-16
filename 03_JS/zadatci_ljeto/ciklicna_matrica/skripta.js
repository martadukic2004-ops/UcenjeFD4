const izvedi = document.getElementById('izvedi')

izvedi.addEventListener('click', () => {

    let nastavi = 'DA'

    const redoviInput = document.getElementById('redovi')
    const koloneInput = document.getElementById('kolone')
    const zadatakInput = document.getElementById('zadatak')
    const rezultat = document.getElementById('rezultat')

    const ponovi = document.getElementById('ponovi')
    const da = document.getElementById('da')
    const ne = document.getElementById('ne')

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

    function popuniSpiralu(pocetniRed, pocetniStupac, smjerovi) {

        let red = pocetniRed
        let stupac = pocetniStupac
        let broj = 1

        let minRed = 0
        let maxRed = redovi - 1
        let minStupac = 0
        let maxStupac = kolone - 1

        let smjer = 0

        while (broj <= redovi * kolone) {

            matrica[red][stupac] = broj
            broj++

            const sljedeciRed = red + smjerovi[smjer][0]
            const sljedeciStupac = stupac + smjerovi[smjer][1]

            if (
                sljedeciRed < minRed ||
                sljedeciRed > maxRed ||
                sljedeciStupac < minStupac ||
                sljedeciStupac > maxStupac ||
                matrica[sljedeciRed][sljedeciStupac] !== 0
            ) {

                smjer++

                if (smjer === 4) {
                    smjer = 0
                }

            }

            red += smjerovi[smjer][0]
            stupac += smjerovi[smjer][1]
        }
    }

    function sredisnjaSpirala(pocetniRed, pocetniStupac, smjerovi) {

        let red = pocetniRed
        let stupac = pocetniStupac
        let broj = 1

        matrica[red][stupac] = broj
        broj++

        let smjer = 0
        let brojKoraka = 1

        while (broj <= redovi * kolone) {

            for (let ponavljanje = 0; ponavljanje < 2; ponavljanje++) {

                for (let i = 0; i < brojKoraka; i++) {

                    red += smjerovi[smjer][0]
                    stupac += smjerovi[smjer][1]

                    if (
                        red >= 0 &&
                        red < redovi &&
                        stupac >= 0 &&
                        stupac < kolone &&
                        matrica[red][stupac] === 0
                    ) {
                        matrica[red][stupac] = broj
                        broj++
                    }

                    if (broj > redovi * kolone) {
                        break
                    }
                }

                smjer++

                if (smjer === 4) {
                    smjer = 0
                }

                if (broj > redovi * kolone) {
                    break
                }
            }

            brojKoraka++
        }
    }

    if (zadatak === 1) {
        //Početak 1. zadatka 
        // 1. Dolje desno početak u smjeru kazaljke na satu

        popuniSpiralu(
            redovi - 1,
            kolone - 1,
            [
                [0, -1],
                [-1, 0],
                [0, 1],
                [1, 0]
            ]
        )

    }
    //Završetak 1. zadatka 

    if (zadatak === 2) {
        //Početak 2. zadatka
        //2. Dolje lijevo početak u smjeru kazaljke na satu

        popuniSpiralu(
            redovi - 1,
            0,
            [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1]
            ]
        )

    }
    //Završetak 2. zadatka

    if (zadatak === 3) {
        //Početak 3. zadatka
        //3. Gore lijevo početak u smjeru kazaljke na satu

        popuniSpiralu(
            0,
            0,
            [
                [0, 1],
                [1, 0],
                [0, -1],
                [-1, 0]
            ]
        )

    }
    //Završetak 3. zadatka

    if (zadatak === 4) {
        //Početak 4. zadatka
        //4. Gore desno početak u smjeru kazaljke na satu

        popuniSpiralu(
            0,
            kolone - 1,
            [
                [1, 0],
                [0, -1],
                [-1, 0],
                [0, 1]
            ]
        )

    }
    //Završetak 4. zadatka

    if (zadatak === 5) {
        //Početak 5. zadatka
        //5. Dolje desno početak u kontra smjeru kazaljke na satu

        popuniSpiralu(
            redovi - 1,
            kolone - 1,
            [
                [-1, 0],
                [0, -1],
                [1, 0],
                [0, 1]
            ]
        )

    }
    //Završetak 5. zadatka

    if (zadatak === 6) {
        //Početak 6. zadatka
        //6. Dolje lijevo početak u kontra smjeru kazaljke na satu

        popuniSpiralu(
            redovi - 1,
            0,
            [
                [0, 1],
                [-1, 0],
                [0, -1],
                [1, 0]
            ]
        )

    }
    //Završetak 6. zadatka

    if (zadatak === 7) {
        //Početak 7. zadatka
        //7. Gore lijevo početak u kontra smjeru kazaljke na satu

        popuniSpiralu(
            0,
            0,
            [
                [1, 0],
                [0, 1],
                [-1, 0],
                [0, -1]
            ]
        )

    }
    //Završetak 7. zadatka

    if (zadatak === 8) {
        //Početak 8. zadatka
        //8. gore desno početak u kontra smjeru kazaljke na satu

        popuniSpiralu(
            0,
            kolone - 1,
            [
                [0, -1],
                [1, 0],
                [0, 1],
                [-1, 0]
            ]
        )

    }
    //Završetak 8. zadatka

    if (zadatak === 9) {
        //Početak 9. zadatka
        //9. Sredina lijevo u smjeru kazaljke na satu

        sredisnjaSpirala(
            Math.floor((redovi - 1) / 2),
            Math.floor((kolone - 1) / 2),
            [
                [0, -1],
                [-1, 0],
                [0, 1],
                [1, 0]
            ]
        )

    }
    //Završetak 9. zadatka

    if (zadatak === 10) {
        //Početak 10. zadatka
        //10. Sredina desno u smjeru kazaljke na satu

        sredisnjaSpirala(
            Math.floor((redovi - 1) / 2),
            Math.floor((kolone - 1) / 2),
            [
                [0, 1],
                [1, 0],
                [0, -1],
                [-1, 0]
            ]
        )

    }
    //Završetak 10. zadatka

    if (zadatak === 11) {
        //Početak 11. zadatka
        //11. Sredina gore u smjeru kazaljke na satu

        sredisnjaSpirala(
            Math.floor((redovi - 1) / 2),
            Math.floor((kolone - 1) / 2),
            [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1]
            ]
        )
    }
    //Završetak 11. zadatka

    if (zadatak === 12) {
        //Početak 12. zadatka
        //12. Sredina dolje u smjeru kazaljke na satu

        sredisnjaSpirala(
            Math.floor((redovi - 1) / 2),
            Math.floor((kolone - 1) / 2),
            [
                [1, 0],
                [0, -1],
                [-1, 0],
                [0, 1]
            ]
        )

    }
    //Završetak 12. zadatka

    if (zadatak === 13) {
        //Početak 13. zadatka
        //13. Sredina lijevo u kontra smjeru kazaljke na satu

        sredisnjaSpirala(
            Math.floor((redovi - 1) / 2),
            Math.floor((kolone - 1) / 2),
            [
                [0, -1],
                [1, 0],
                [0, 1],
                [-1, 0]
            ]
        )

    }
    //Završetak 13. zadatka

    if (zadatak === 14) {
        //Početak 14. zadatka
        //14. Sredina desno u kontra smjeru kazaljke na satu

        sredisnjaSpirala(
            Math.floor((redovi - 1) / 2),
            Math.floor((kolone - 1) / 2),
            [
                [0, 1],
                [-1, 0],
                [0, -1],
                [1, 0]
            ]
        )

    }
    //Završetak 14. zadatka

    if (zadatak === 15) {
        //Početak 15. zadatka
        //15. Sredina gore u kontra smjeru kazaljke na satu

        sredisnjaSpirala(
            Math.floor((redovi - 1) / 2),
            Math.floor((kolone - 1) / 2),
            [
                [-1, 0],
                [0, -1],
                [1, 0],
                [0, 1]
            ]
        )

    }
    //Završetak 15. zadatka

    if (zadatak === 16) {
        //Početak 16. zadatka
        //16. Sredina dolje u kontra smjeru kazaljke na satu

        sredisnjaSpirala(
            Math.floor((redovi - 1) / 2),
            Math.floor((kolone - 1) / 2),
            [
                [1, 0],
                [0, 1],
                [-1, 0],
                [0, -1]
            ]
        )

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

    rezultat.innerHTML += '<div class="matrica">' + html + '</div>'

    ponovi.style.display = 'block'

    da.addEventListener('click', () => {
        ponovi.style.display = 'none'
    })

    ne.addEventListener('click', () => {
        ponovi.style.display = 'none'
    })
})