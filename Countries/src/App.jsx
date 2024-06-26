import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import Header from "./components/Header";
import "./app.css"

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
