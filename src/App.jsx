import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { createTheme,ThemeProvider } from '@mui/material/styles';
import './styles/App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#eb5a3c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#df9755',
    },
    background: {
      default: '#edf4c2',
      paper: '#e6dc9b',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;