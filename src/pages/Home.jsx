//import { useContext } from 'react'
import { useState } from 'react'
//import { MedicineContext } from '../components/medicine'
import { Link } from 'react-router'

function Home() {
  //const { medicine, setMedicine } = useContext(MedicineContext)
  // const [medicine, setMedicine] = useState({
  //   medicineName: "",
  //   results: {},
  // });
  // const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = (event) => {
    event.preventDefault()
    const onSearch = document.getElementById('medicine').value
    console.log(onSearch)
    const url = `https://api.fda.gov/drug/label.json?&limit=5&search=openfda.brand_name:${onSearch}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const newResults = data.results
        // setMedicine({medicineName: onSearch, results: newResults})
        setResults(newResults)
        console.log(newResults)
      })
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
          {/* <h3> { medicine.medicineName } </h3> */}
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
