import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/css/App.css";
import Home from "./Pages/Home";
import AddImage from "./Pages/AddBrand";
import "swiper/css";
import Footer from "./Components/Footer";
import AddToCartState from "./context/AddToCartState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddItemForm from "./Components/AddItemForm";

function App() {
  return (
    <AddToCartState>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/add-image" element={<AddImage/>} />
            <Route exact path="/add-item" element={<AddItemForm/>} />           
          </Routes>
        </Container>
        <Footer />
      </Router>
    </AddToCartState>
  );
}

export default App;
