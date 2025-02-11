# Föli-sovelluksen pohja

Sovellus hakee Fölin avoimesta rajapinnasta pysäkille 30 tulevien bussien tiedot.
Hakuun käytetään JavaScriptin sisäänrakennettua [Fetch](https://www.javascripttutorial.net/web-apis/javascript-fetch-api/)-toimintoa.

Fetch perustuu epäsynkroniseen (async) koodiin, joka mahdollistaa sen, että jonkin toiminnon valmistumista voidaan jäädä odottamaan ilman, että koko sovelluksen suorittaminen pysähtyy odottamisen ajaksi. Muu sovellus jatkaa suoritusta, ja kun odotettu toiminto valmistuu, voidaan suorittaa joku haluttu osa koodista siinä vaiheessa. Fetch käyttää epäsynkronisuuden toteuttamiseen JavaScriptin [Promise-rakennetta](https://www.freecodecamp.org/news/javascript-promises-explained/): kun pyyntö lähetetään, Fetch palauttaa Promise-objektin, joka "täyttyy" sitten, kun vastaus pyyntöön tulee.

Tässä sovelluksessa Promiseja käsitellään [then-catch](https://www.freecodecamp.org/news/javascript-promise-methods/) -rakenteella, jossa then-komennolle annetaan funktio, joka suoritetaan, kun Promise täyttyy. Huomaat, että koodissa on ketjutettu kaksi then-komentoa. Teemme tämän siksi, että ensimmäisessä then-lohkossa oleva return-lauseke palauttaa uuden Promisen. Lopussa oleva catch-lohko suoritetaan siinä tapauksessa, että jossain kohtaan then-ketjua on tapahtunut virhe.