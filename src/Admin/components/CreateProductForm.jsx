import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];

const CreateProductForm = () =>{
    const [productData, setProductData] = useState({
        imageUrl: "",
        brand: "",
        title: "",
        color: "",
        discountedPrice: "",
        price: "",
        discountPersent: "",
        size: initialSizes,
        quantity: "",
        topLayvelCategory: "",
        secondLayvelCategory: "",
        thirdLayvelCategory: "",
        description: "",
      });
      const dispatch = useDispatch();
      const jwt = localStorage.getItem("jwt");
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const handleSizeChange = (e, index) => {
        let { name, value } = e.target;
        name === "size_quantity" ? (name = "quantity") : (name = e.target.name);
        const sizes = [...productData.size];
        sizes[index][name] = value;
        setProductData((prevState) => ({
          ...prevState,
          size: sizes,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(CreateProductForm(productData));
        console.log(productData);
      };


      return (
        <div className='p-10'>
            <Typography variant='h3' sx={{}}>

            </Typography>
        </div>
      );

};
export default CreateProductForm;