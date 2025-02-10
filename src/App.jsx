import { useEffect, useState } from "react"

function App() {
  const [stops, setStops] = useState([])

  useEffect(() => {
    console.log('App käynnistyy')
    fetch('http://data.foli.fi/siri/sm/30')
      .then( (res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Yhteysvirhe')
        }
      })
      .then( (res) => {
        console.log('res', res)
        setStops(res.result)
      })
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
