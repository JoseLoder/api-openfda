/* eslint-disable react/prop-types */

function InfoProduct({ product }) {
  return (
    <article className="card">
<h2>{product.openfda?.brand_name}</h2>
      <ul>
        <li>Ingredientes Activos: {product.active_ingredient ? product.active_ingredient : "Sin aportaciones"}</li>
        <li>Fecha de efectividad: {product.effective_time ? product.effective_time : "Sin aportaciones"}</li>
        <li>No usar: {product.do_not_use ? product.do_not_use : "Sin aportaciones"}</li>
        <li>Dosis y administración: {product.dosage_and_administration ? product.dosage_and_administration : "Sin aportaciones"}</li>
        <li>Indicaciones y uso: {product.indications_and_usage ? product.indications_and_usage : "Sin aportaciones"}</li>
        <li>Propósito: {product.purpose ? product.purpose : "Sin aportaciones"}</li>
        <li>Advertencias: {product.warnings ? product.warnings : "Sin aportaciones"}</li>
        <li>Almacenamiento: {product.storage_and_handling ? product.storage_and_handling : "Sin aportaciones"}</li>
        <li>Preguntas o comentarios: {product.questions ? product.questions : "Sin aportaciones"}</li>
        <li>parar de usar: {product.stop_use ? product.stop_use : "Sin aportaciones"}</li>
      </ul>
    </article>
  );
}

export default InfoProduct;