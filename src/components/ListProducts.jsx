/* eslint-disable react/prop-types */
import CardProduct from './CardProduct';
import '../styles/ListProducts.css';

function ListProducts({ results }) {
  return (
    <section>
    <h2>Resultados de la búsqueda</h2>
    <article>
    {results.map(
      result => (
        <CardProduct product={result} key={result.id} />
        )
      )}
    </article>
  </section>
  );
  
}

export default ListProducts;