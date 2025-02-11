import { useEffect, useState } from "react"

function App() {
  // Luodaan tilamuuttuja pysäkin busseja varten
  const [stops, setStops] = useState([])

  // Suoritetaan aina kun App-komponentti alustetaan sovelluksessa
  useEffect(() => {
    // Haetaan Fölin rajapinnasta pysäkin 30 tiedot JavaScriptin Fetch-toiminnolla
    fetch('http://data.foli.fi/siri/sm/30')
      // Käsitellään vastaus: jos kaikki on OK, puretaan vastauksen data JSON-muodossa, muutoin heitetään poikkeus
      .then( (res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Yhteysvirhe')
        }
      })
      // Käsitellään onnistuneen vastauksen JSON: syötetään se tilamuuttujan set-funktiolle
      .then( (res) => {
        console.log('res', res)
        setStops(res.result)
      })
      // Käsitellään mahdollisesti nousseet virheet tulostamalla ne konsoliin
      .catch( (err) => {
        console.log('err', err)
      })
  }, [])

  return (
    <>
    <h1>Föli</h1>
    {
      stops.map((s, i) => (
        <p key={i}>{s.lineref} - {s.expecteddeparturetime}</p>
      ))
    }
    </>
  )
}

export default App
