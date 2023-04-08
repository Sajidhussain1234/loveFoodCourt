import { Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
const qs = require("qs");

const AddBrandLogoForm = () => {
    const [formData, setFormData] = useState({});
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();    
        const formDataObj = new FormData(e.target);
        const formData = Object.fromEntries(formDataObj.entries());
        setFormData(formData)  
    
        await fetch("http://localhost:1337/api/upload", {
          method: "post",
          body: formDataObj,
        })
          .then((res) => console.log())
          .catch((error) => console.error("Error:", error));
    
        // axios
        //   .post("http://localhost:1337/api/upload", {
        //     body: formDataObj,
        //   })
        //   .then((res) => console.log(res.data))
        //   .catch((error) => console.error("Error:", error));
    
        alert("logo added");
        formRef.current.reset();
      };

  return (
    <Container>
    <div className="my-5">
         <form ref={formRef} className="custom-file" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label text-white"> <><h4>Upload brand logo</h4></></label>         
          <input className="form-control" type="file" id="formFile" name="files"/>
        </div>
        <div className="col-12 mb-5">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
    </Container>
  )
}

export default AddBrandLogoForm;