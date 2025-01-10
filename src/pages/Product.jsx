import { useParams } from "react-router";
import { useEffect, useState } from "react";
import InfoProduct from "../components/InfoProduct";
import {Card, CssBaseline } from "@mui/material";

function Product() {
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams();
  const url = `https://api.fda.gov/drug/label.json?&limit=1&search=id:${id}`

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setProduct(data.results[0])
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <CssBaseline />
      <header>
        <h1>Detalles del producto</h1>
      </header>
      <main>
        <section>
          <Card >
          {isLoading && <p>Cargando...</p>}
          {!isLoading && <InfoProduct product={product} />} 
            </Card>
        </section>
      </main>
        
    </>
  );

}

export default Product;