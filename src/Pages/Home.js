import { Container } from "react-bootstrap";
import BrandsLogo from "../Components/BrandsLogo";
import FoodArea from "../Components/FoodArea";
import HeroSlider from "../Components/HeroSlider";
import SemiBanners from "../Components/SemiBanners";
import PostFormData from "../Components/AddItemForm";
import FooterTop from "../Components/FooterTop";

function Home() {
  
  return (
    <>
      <Container>
        <HeroSlider/>
        <SemiBanners/>
        <FoodArea/>
        <BrandsLogo/>
        <FooterTop/>
      </Container>
    </>
  )

}

export default Home;
