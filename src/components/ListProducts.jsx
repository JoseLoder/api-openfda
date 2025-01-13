/* eslint-disable react/prop-types */
import CardProduct from './CardProduct';
import SkeletonCardProduct from './SkeletonCardProduct';
import '../styles/ListProducts.css';

const SkeletonCount = () => {
  return window.innerWidth > 768 ? 8 : 4;
}

const verifyResults = (results) => {
  if (results === undefined || results.length === 0) {
    return <h2>No se encontraron resultados</h2>
  } else {
    return results.map(
        result => (
          <CardProduct product={result} key={result.id} />
          )
        )}
  }
function ListProducts({ results, isLoading }) {
  return (
    <section>
    <h2>Resultados de la búsqueda</h2>
    <article>
    {
    isLoading ?
    Array.from({ length: SkeletonCount() }).map((_, index) => <SkeletonCardProduct key={index} />) :
    verifyResults(results)
    }
    </article>
  </section>
  );
  
}

export default ListProducts;