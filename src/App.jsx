import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Product from "./pages/Product";
import { createTheme,ThemeProvider } from '@mui/material/styles';
import './styles/App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
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