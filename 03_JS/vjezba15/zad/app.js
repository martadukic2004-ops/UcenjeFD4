const obrazac = document.getElementById('obrazac-podataka');
const kontejnerPogreske = document.getElementById('ispis-pogreske');
document.getElementById('mjesto-projekta').focus();

obrazac.addEventListener('submit', (dogadaj) => {
    dogadaj.preventDefault();

    kontejnerPogreske.replaceChildren();

    document.querySelectorAll('.greska').forEach(o => o.replaceChildren());

    const konf = new Konfiguracija();

    try {
        konf.provjeriValjanost({
            mjesto: document.getElementById('mjesto-projekta'),
            projekt: document.getElementById('naziv-projekta'),
            instanci: document.getElementById('broj-instanci'),
            procesor: document.getElementById('snaga-procesora'),
            datum: document.getElementById('datum-pokretanja'),
            oznake: document.getElementById('oznake-sustava'),
            datoteka: document.getElementById('datoteka-postavki'),
            uvjeti: document.getElementById('potvrda-uvjeta')
        });

        console.log(
            '%c 🎉 PODACI USPJEŠNO PROVJERENI (JSON):',
            'color: #00d4ff; font-weight: bold;'
        );

        console.log(JSON.stringify(konf.toJSON(), null, 4));

        document.getElementById('text-area').value =
            JSON.stringify(konf.toJSON(), null, 4);

        kontejnerPogreske.appendChild(
            Pomocno.kreirajElement(
                'p',
                'Pogledajte podatke u konzoli'
            )
        );

        document.getElementById('mjesto-projekta').focus();

    } catch (e) {

        kontejnerPogreske.appendChild(
            Pomocno.kreirajElement(
                'p',
                e.message
            )
        );

        konf.greske.forEach(o =>
            document
                .getElementById('greska-' + o.element.id)
                .appendChild(
                    Pomocno.kreirajElement(
                        'p',
                        '⚠️ ' + o.greska
                    )
                )
        );

        konf.greske[0].element.focus();
    }
});