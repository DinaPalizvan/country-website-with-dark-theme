import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import "./app.css";
import CountryPage from "./pages/CountryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<CountryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
