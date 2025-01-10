/* eslint-disable react/prop-types */
import CardProduct from './CardProduct';
import SkeletonCardProduct from './SkeletonCardProduct';
import '../styles/ListProducts.css';

const SkeletonCount = () => {
  return window.innerWidth > 768 ? 8 : 4;
}
function ListProducts({ results, isLoading }) {
  return (
    <section>
    <h2>Resultados de la búsqueda</h2>
    <article>
    {
    isLoading ?
    Array.from({ length: SkeletonCount() }).map((_, index) => <SkeletonCardProduct key={index} />) :
    results.map(
      result => (
        <CardProduct product={result} key={result.id} />
        )
      )}
    </article>
  </section>
  );
  
}

export default ListProducts;