/* eslint-disable react/prop-types */
import { List, ListItemText, ListSubheader, Typography } from "@mui/material";
import "../styles/InfoProduct.css";
const tryShow = (string) => {
  if (string) {
    return string;
  }
  return "Sin aportaciones";
}

function InfoProduct({ product }) {
  return (
    <article className="card">
      <h2>{product.openfda?.brand_name}</h2>
      <List
            sx={{ width: '100%', bgcolor: 'background.default'}}
            component="ul"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Información del Producto
              </ListSubheader>
            }
      >
        <ListItemText>
          <Typography component="span" color="primary">Ingredientes Activos: </Typography> {tryShow(product.active_ingredient)}
        </ListItemText>
        <ListItemText>
          <Typography component="span" color="primary">Fecha de efectividad: </Typography> {tryShow(product.effective_time)}
        </ListItemText>
        <ListItemText>
          <Typography component="span" color="primary">No usar: </Typography> {tryShow(product.do_not_use)}
        </ListItemText>
        <ListItemText>
          <Typography component="span" color="primary">Dosis y administración: </Typography> {tryShow(product.dosage_and_administration)}
        </ListItemText>
        <ListItemText>
          <Typography component="span" color="primary">Indicaciones y uso: </Typography> {tryShow(product.indications_and_usage)}
        </ListItemText>
        <ListItemText>
          <Typography component="span" color="primary">Propósito:  </Typography> {tryShow(product.purpose)}
        </ListItemText>
        <ListItemText>
          <Typography component="span" color="primary">Advertencias:  </Typography> {tryShow(product.warnings)}
        </ListItemText>
        <ListItemText>
          <Typography component="span" color="primary">Almacenamiento: </Typography> {tryShow(product.storage_and_handling)}
        </ListItemText>
        <ListItemText>
          <Typography component="span" color="primary">Preguntas o comentarios: </Typography> {tryShow(product.questions)}
        </ListItemText>
        <ListItemText>
          <Typography component="span" color="primary">Parar de usar: </Typography> {tryShow(product.stop_use)}
        </ListItemText>
      </List>
    </article>
  );
}

export default InfoProduct;