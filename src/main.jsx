import { createRoot } from 'react-dom/client'
//import { MedicineContext } from './components/medicine.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
//  <MedicineContext>
    <App />
//  </MedicineContext>,
)
