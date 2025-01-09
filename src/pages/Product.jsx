import { useParams } from "react-router";
import { useEffect, useState } from "react";
import CardProduct from "../components/cardProduct";

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
    <div>
      <h1>Product</h1>
      {isLoading && <p>Cargando...</p>}
      {!isLoading && <CardProduct product={product} />}
      
    </div>
  );
}

export default Product;