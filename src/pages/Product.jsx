import { useParams } from "react-router";
import { useEffect, useState } from "react";
import InfoProduct from "../components/InfoProduct";
import { CssBaseline } from "@mui/material";

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
      <section>
        <h1>Product</h1>
        {isLoading && <p>Cargando...</p>}
        {!isLoading && <InfoProduct product={product} />} 
      </section>
    </>
  );

}

export default Product;