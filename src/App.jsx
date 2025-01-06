import { useState,useEffect } from 'react'
import './App.css'

function App() {



  const [medicine, setMedicine] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = (event) => {
    event.preventDefault()
    const inSearch = document.getElementById('medicine').value
    console.log(inSearch)
    setMedicine(inSearch)
    const url = `https://api.fda.gov/drug/label.json?&limit=5&search=openfda.brand_name:${inSearch}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const newResults = data.results
        setResults(newResults)
      })
  }

  useEffect(() => {
    const list = document.getElementById('results')
    results.forEach(result => {
      const listItem = document.createElement('li')
      listItem.id = result.id
      listItem.innerText = result.openfda.brand_name
      listItem.addEventListener('click', moreInfo(result))
      list.appendChild(listItem)
    })
  }, [results])

  const moreInfo = (result) => {
    return () => {
      console.log(result)
    }
  }

  return (
    <>
      <header>
        <h1>Bienvenido a mi prueba técnica</h1>
      </header>
      <main>
        <form>
          <label htmlFor="medicine">
            Introduce aquí el medicamento que deseas buscar:
            <input type="text" id="medicine" name="medicine"/>
          </label>
          <button onClick={handleSearch}>Buscar</button>
        </form>
        
        <section>
          <h2>Resultados de la búsqueda</h2>
          <h3> { medicine } </h3>
          <ul id='results'></ul>
        </section>
      </main>
    </>
  )
}

export default App
