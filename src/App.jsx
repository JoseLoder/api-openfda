import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;