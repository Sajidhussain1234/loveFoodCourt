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

const BrandsLogo = () => {
  const [brandLogo, setBrandLogo] = useState([]);
  const [formData, setFormData] = useState({});
  const formRef = useRef(null);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();    
  //   const formDataObj = new FormData(e.target);
  //   const formData = Object.fromEntries(formDataObj.entries());
  //   setFormData(formData)  

  //   await fetch("http://localhost:1337/api/upload", {
  //     method: "post",
  //     body: formDataObj,
  //   })
  //     .then((res) => console.log())
  //     .catch((error) => console.error("Error:", error));

  //   // axios
  //   //   .post("http://localhost:1337/api/upload", {
  //   //     body: formDataObj,
  //   //   })
  //   //   .then((res) => console.log(res.data))
  //   //   .catch((error) => console.error("Error:", error));

  //   alert("logo added");
  //   formRef.current.reset();
  // };

 
// Displaying brand logo -- Geting logo through api 
    const getData = async () => {
      const queryString = qs.stringify(
        {
          populate: {
            image: {
              fields: ["url"],
            },
          },
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );
      const res = await axios.get("http://localhost:1337/api/upload/files"
        // `http://localhost:1337/api/brands-logos/?${queryString}`
      );
      const data = await res.data;
      console.log(data);
      setBrandLogo(data);
    };

    useEffect(() => {
      getData();
    }, []);

  return (
    <div>

      {/* This is taking brand image through simple bootstrap  */}
        {/* <form ref={formRef} className="custom-file" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label text-white"> <><h4>Upload brand logo</h4></></label>         
          <input className="form-control" type="file" id="formFile" name="files"/>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form> */}


 {/* This is taking brand image through react bootstrap  */}
      {/* <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFile" className="mb-1">
          <Form.Label className="text-white">Choose brand image:</Form.Label>
          <Form.Control ref={fileRef} type="file" name="files" />
          </Form.Group>
          <Button className="mt-3" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container> */}

      <div className="brand-logos">
        <a href="/" className="btn btn-primary float-end">
          See More
        </a>
        <h1 className="title">Brands</h1>
        <hr />
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            576: {
              // width: 576,
              slidesPerView: 3,
            },
            992: {
              // width: 768,
              slidesPerView: 6,
            },
          }}
          slidesPerView={2}
          navigation={true}
          className="brands"
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {brandLogo.map((brand) => (
            <SwiperSlide key={brand.id}>
              {" "}
              <a href="/">
                {" "}
                <Image
                  src={`http://localhost:1337${brand.url}`}
                  alt="Brand KFC"
                  className="brand-image"
                />{" "}
              </a>{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandsLogo;
