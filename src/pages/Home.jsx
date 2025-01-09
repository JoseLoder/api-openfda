import { useState } from 'react'
import { Link } from 'react-router'
import { CssBaseline, Button } from '@mui/material'


function Home() {

  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = (event) => {
    event.preventDefault()
    setIsLoading(true)
    const onSearch = document.getElementById('medicine').value
    console.log(onSearch)
    const url = `https://api.fda.gov/drug/label.json?&limit=5&search=openfda.brand_name:${onSearch}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const newResults = data.results
        // setMedicine({medicineName: onSearch, results: newResults})
        setResults(newResults)
        setIsLoading(false)
      })
  }

  return (
    <>
      <CssBaseline />
      <header>
        <h1>Bienvenido a mi prueba técnica</h1>
      </header>
      <main>
        <form>
          <label htmlFor="medicine">
            Introduce aquí el medicamento que deseas buscar:
            <input type="text" id="medicine" name="medicine"/>
          </label>
          <Button onClick={handleSearch}>Buscar</Button>
        </form>
        
        <section>
          <h2>Resultados de la búsqueda</h2>
          {isLoading && <p>Cargando...</p>}
          <ul>
            {results.map(
              result => (
                <li key={result.id} id={result.id}>
                  <Link to={`/product/${result.id}`}> {result.openfda.brand_name} </Link>
                </li>
                )
              )}
          </ul>
        </section>
      </main>
    </>
  )
}

export default Home
