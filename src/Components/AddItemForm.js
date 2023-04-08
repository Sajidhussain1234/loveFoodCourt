import { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const AddItemForm = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {};
    const formData = new FormData();  

    const form = formRef.current;
    console.log(form);
  
    const formControls = Array.from(form.elements);
    console.log(formControls)

    formControls.forEach(({ name, type, value, files, ...element }) => {
      if (!["submit", "file"].includes(type)) {
        data[name] = value;
      } else if (type === "file") {
        files.forEach((file) => {
          formData.append(`files.${name}`, file, file.name);
        });
      }
    });

    form.append("data", JSON.stringify(data));
    const out = Object.fromEntries(formData.entries());
    console.log(out);


    //  axios
    //     .post("http://localhost:1337/api/products", { data: formData })
    //     .then((res) => console.log(res.data));
    //     .catch((error) => console.error("Error:", error));
    //   alert("New item added");
    //   formRef.current.reset();
  };

  return (
    <Container>
      <div className="my-5">
        <h3 className="text-white my-2">Add New Item</h3>
        <form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="title" className="form-label text-white">
            Title
          </label>
          <input type="text" className="form-control" id="title" name="title" />
          <label htmlFor="description" className="form-label text-white">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
          />
          <label htmlFor="price" className="form-label text-white">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
          />
          <label htmlFor="category" className="form-label text-white">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
          />
          <label htmlFor="formFile" className="form-label text-white">
            Image
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            name="files"
          />
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
};

export default AddItemForm;

// React Bootstrap
// import { useState, useRef } from "react";
// import { Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import axios from "axios";

// const AddItemForm = () => {
//   const formRef = useRef(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = {};
//     const formData = new FormData();

//       Form.elements
//         .forEach(({ name, type, value, files, ...element }) => {
//           if (!['submit', 'file'].includes(type)) {
//             data[name] = value;
//           } else if (type === 'file') {
//             files.forEach((file) => {
//               formData.append(`files.${name}`, file, file.name);
//             });
//           }
//         });

//     formData.append('data', JSON.stringify(data));
//     const out = Object.fromEntries(formData.entries());
//     console.log(out);

//   //  axios
//   //     .post("http://localhost:1337/api/products", { data: formData })
//   //     .then((res) => console.log(res.data))
//   //     .catch((error) => console.error("Error:", error));
//   //   alert("New item added");
//   //   formRef.current.reset();
//   };

//   return (
//     <Container>
//       <div className="my-5">
//         <h3 className="text-white my-2">Add New Item</h3>

//         <Form ref={formRef} onSubmit={handleSubmit}>
//           <Form.Group className="mb-1" controlId="postDataForm">
//             <Form.Label className="text-white">Title</Form.Label>
//             <Form.Control type="text" name="title" />
//           </Form.Group>
//           <Form.Group className="mb-1" controlId="postDataForm">
//             <Form.Label className="text-white">Description</Form.Label>
//             <Form.Control type="text" name="description" />
//           </Form.Group>
//           <Form.Group className="mb-1" controlId="postDataForm">
//             <Form.Label className="text-white mt-2">Price</Form.Label>
//             <Form.Control type="text" name="price" />
//           </Form.Group>
//           <Form.Group className="mb-1" controlId="postDataForm">
//             <Form.Label className="text-white">Category</Form.Label>
//             <Form.Control type="text" name="category" />
//           </Form.Group>
//           <Form.Group controlId="postDataForm" className="mb-1">
//             <Form.Label className="text-white">image</Form.Label>
//             <Form.Control type="file" name="cover" />
//           </Form.Group>
//           <Button className="mt-2" variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>
//     </Container>
//   );
// };

// export default AddItemForm;
