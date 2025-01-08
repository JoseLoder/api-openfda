import { useParams } from "react-router";
import { useState } from "react";

function Product() {
  const [product, setProduct] = useState({})
  
  const { id } = useParams();
  const url = `https://api.fda.gov/drug/label.json?&limit=5&search=id:${id}`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    setProduct(data.results[0])
  })
//   const product = {
//     "effective_time": "20210902",
//     "inactive_ingredient": [
//         "INACTIVE INGREDIENTS Sucrose"
//     ],
//     "purpose": [
//         "USES USES: Temporary Relief - Acne, Boils* * Claims based on traditional homeopathic practice, not accepted medical evidence. Not FDA evaluated."
//     ],
//     "keep_out_of_reach_of_children": [
//         "Keep this and all medication out of reach of children"
//     ],
//     "warnings": [
//         "WARNINGS This product is to be used for self-limiting conditions If symptoms do not improve in 4 days, or worsen, discontinue use and seek assistance of health professional. As with any drug, if you are pregnant, or nursing a baby, seek professional advice before taking this product. Keep this and all medication out of reach of children Do not use if capseal is broken or missing. Close the cap tightly after use."
//     ],
//     "questions": [
//         "QUESTIONS OR COMMENTS www.Rxhomeo.com | 1.888.2796642 | info@rxhomeo.com Rxhomeo, Inc 3200 Commander Dr, Ste 100-W1, Carrollton, TX 75006 USA"
//     ],
//     "spl_product_data_elements": [
//         "SILICEA SILICEA SUCROSE SILICON DIOXIDE SILICON DIOXIDE"
//     ],
//     "openfda": {
//         "brand_name": [
//             "SILICEA"
//         ],
//         "generic_name": [
//             "SILICEA"
//         ],
//         "manufacturer_name": [
//             "Rxhomeo Private Limited d.b.a. Rxhomeo, Inc"
//         ],
//         "product_ndc": [
//             "15631-0404"
//         ],
//         "product_type": [
//             "HUMAN OTC DRUG"
//         ],
//         "route": [
//             "ORAL"
//         ],
//         "substance_name": [
//             "SILICON DIOXIDE"
//         ],
//         "spl_id": [
//             "ca7bbcc8-2354-375c-e053-2995a90a72a0"
//         ],
//         "spl_set_id": [
//             "0000025c-6dbf-4af7-a741-5cbacaed519a"
//         ],
//         "package_ndc": [
//             "15631-0404-0",
//             "15631-0404-1",
//             "15631-0404-2",
//             "15631-0404-3",
//             "15631-0404-4",
//             "15631-0404-5",
//             "15631-0404-6",
//             "15631-0404-7"
//         ],
//         "is_original_packager": [
//             true
//         ],
//         "upc": [
//             "8907460005526"
//         ],
//         "unii": [
//             "ETJ7Z6XBU4"
//         ]
//     },
//     "version": "2",
//     "dosage_and_administration": [
//         "DOSAGE Adults- Take 4 or 6 Pellets by mouth, three times daily or as suggested by physician. Children 2 years and older- take 1/2 the adult dose."
//     ],
//     "pregnancy_or_breast_feeding": [
//         "As with any drug, if you are pregnant, or nursing a baby, seek professional advice before taking this product."
//     ],
//     "stop_use": [
//         "If symptoms do not improve in 4 days, or worsen, discontinue use and seek assistance of health professional."
//     ],
//     "storage_and_handling": [
//         "STORAGE Store in a cool dark place"
//     ],
//     "do_not_use": [
//         "Do not use if capseal is broken or missing. Close the cap tightly after use."
//     ],
//     "package_label_principal_display_panel": [
//         "Mini-Label Label-Pellets Blister-Pack Carton-Pack"
//     ],
//     "indications_and_usage": [
//         "INDICATIONS Condition listed above or as directed by the physician"
//     ],
//     "set_id": "0000025c-6dbf-4af7-a741-5cbacaed519a",
//     "id": "ca7bbcc8-2354-375c-e053-2995a90a72a0",
//     "active_ingredient": [
//         "ACTIVE INGREDIENT SILICEA HPUS 2X and higher"
//     ]
// }
  return (
    <div>
      <h1>Product</h1>
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
    </div>
  );
}

export default Product;