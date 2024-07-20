import React, { useRef, useState } from "react";
import "./add.css";
import upload from "../../assets/uploadImage.jpg";
import axios from 'axios'
import { toast } from "react-toastify";
const Add = () => {
  const [image, setImage] = useState(false);
  const nameRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const handleForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("description", descriptionRef.current.value);
    formData.append("category", categoryRef.current.value);
    formData.append("price", priceRef.current.value);
    formData.append("image", image);
    const response= await axios.post("http://localhost:5001/api/food/add",formData)
    console.log(response)

    if(response.data.success){
      nameRef.current.value=""
      descriptionRef.current.value=""
      categoryRef.current.value=""
      priceRef.current.value=""
      setImage(false)
      toast.success(response.data.message)
    }
    else{
          toast.error(response.data.message)
    }

  };

  return (
    <div className="add">
      <form onSubmit={handleForm}>
        <div className="add-img-upload flex-cols">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : upload} alt="" />
          </label>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
            id="image"
            required
            hidden
          />
        </div>
        <div className="add-product-name flex-cols">
          <p>Product name</p>
          <label htmlFor="product"></label>
          <input
            type="text"
            id="product"
            placeholder="Enter text here"
            required
            ref={nameRef}
          />
        </div>
        <div className="add-product-description flex-cols">
          <p>Product description</p>
          <textarea
            rows="5"
            cols="40"
            placeholder="Write Content here"
            required
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className="add-price-category">
          <div className="add-category flex-cols">
            <p>Select category</p>
            <label htmlFor="category"></label>
            <select name="" id="category" ref={categoryRef}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Noodles">Noodles</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Dessert">Dessert</option>
              <option value="pure Veg">pure Veg</option>
              <option value="Pasta">Pasta</option>
            </select>
          </div>
          <div className="add-product-price flex-cols">
            <label htmlFor="price"></label>
            <p>Product Price</p>
            <input type="number" placeholder="Enter price.." ref={priceRef} />
          </div>
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default Add;
