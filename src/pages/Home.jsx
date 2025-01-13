import { useState } from 'react'
import { CssBaseline, Button } from '@mui/material'
import ListProducts from '../components/ListProducts'
import '../styles/Home.css';

function Home() {

  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = (event) => {
    event.preventDefault()
    setIsLoading(true)
    const onSearch = document.getElementById('medicine').value
    const url = `https://api.fda.gov/drug/label.json?&limit=5&search=openfda.brand_name:${onSearch}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const newResults = data.results
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
          </label>
            <input type="text" id="medicine" name="medicine"/>
          <Button type='submit' onClick={handleSearch}>Buscar</Button>
        </form>
        {<ListProducts results={results} isLoading = {isLoading} />}
      </main>
    </>
  )
}

export default Home
