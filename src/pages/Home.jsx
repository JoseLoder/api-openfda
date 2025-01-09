import { useState } from 'react'
import { CssBaseline, Button } from '@mui/material'
import ListProducts from '../components/ListProducts'

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
        console.log(newResults)
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
          <Button type='submit' onClick={handleSearch}>Buscar</Button>
        </form>
        
        <section>
          <h2>Resultados de la búsqueda</h2>
          {isLoading && <p>Cargando...</p>}

          {!isLoading && <ListProducts results={results} />}
        </section>
      </main>
    </>
  )
}

export default Home
