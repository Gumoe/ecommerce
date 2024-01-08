import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';

const initialSizes=[
  { name: "S", quantity:0 },
  { name: "M", quantity:0 },
  { name: "L", quantity:0 },
];
const CreateProductForm = () => {
  const [productData, setProductData] = useState({
    imageUrl:"",
    brand:"",
    title:"",
    color:"",
    discountedPrice:"",
    price:"",
    discountPersent:"",
    size: initialSizes,
    quantity:"",
    topLayvelCategory: "",
    secondLayvelCategory:"",
    thirdLayvelCategory:"",
    description:"",
  });
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt")
    const handleChange = (e) =>{
      const { name, value} = e.target;
      setProductData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
    const handleSizeChange = (e, index) =>{
      let { name, value} =e.target;
      name==="size_quantity"?name="quantity": name=e.target.name;
      const sizes=[...productData.size];
      sizes[index][name]= value;
      setProductData((prevState)=>({
        ...prevState,
        size: sizes,
      }));
    };


    const handleSubmit = (e) =>{
      e.preventDefault();
      dispatch(createProduct(productData))
      console.log(productData);
    };

  return (
    <Fragment>
      <Typography
      variant='h3'
      sx={{ textAlign: "center"}}
      className="py-10 text-center"
      >
        Add New Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
        >
          <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
            fullWidth
            label="Image URL"
            name="imageUrl"
            value={productData.imageUrl}
            onChange={handleChange}
            />
            </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="brand"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="title"
            name="title"
            value={productData.title
            onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="color"
            name="color"
            value={productData.color}
            onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="brand"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
          <TextField
          fullWidth
          label="Quantity"
          name="quantity"
          value={productData.quantity}
          onChange={handleChange}
          type="number"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
        <TextField
        fullWidth
        label="Price"
        name="price"
        value={productData.price}
        onChange={handleChange}
        type="number"
        />
      </Grid>

      <Grid item xs={12} sm={4}>
      <TextField
      fullWidth
      label="Discounted Price"
      name="discountedPrice"
      value={productData.discountedPrice}
      onChange={handleChange}
      type="number"
      />
    </Grid>

    <Grid item xs={12} sm={4}>
    <TextField
    fullWidth
    label="Discount Percentage"
    name="discountPersent"
    value={productData.discountPersent}
    onChange={handleChange}
    type="number"
    />
  </Grid>

  <Grid item xs={6} sm={4}>
  <FormControl fullWidth>
    <InputLabel>Top Level Category</InputLabel>
    <Select
    name="topLavelCategory"
    value={productData.topLayvelCategory}
    onChange={handleChange}
    label="Top Level Category"
    >
      <MenuItem value="men">Men</MenuItem>
      <MenuItem value="women">Women</MenuItem>
      <MenuItem value="kids">Kids</MenuItem>

    </Select>
  </FormControl>
</Grid>

 <Grid item xs={6} sm={4}>
 <FormControl fullWidth>
   <InputLabel>Second Level Category</InputLabel>
   <Select
   name="secondLavelCategory"
   value={productData.secondLayvelCategory}
   onChange={handleChange}
   label="Second Level Category"
   >
     <MenuItem value="clothing">Clothing</MenuItem>
     <MenuItem value="accessories">Accessories</MenuItem>
     <MenuItem value="brands">Brands</MenuItem>

   </Select>
 </FormControl>
</Grid>

<Grid item xs={6} sm={4}>
  <FormControl fullWidth>
    <InputLabel>Third Level Category</InputLabel>
    <Select
    name="thirdLavelCategory"
    value={productData.thirdLayvelCategory}
    onChange={handleChange}
    label="Third Level Category"
    >
      <MenuItem value="top">Tops</MenuItem>
      <MenuItem value="women_dress">Dresses</MenuItem>
      <MenuItem value="t-shirts">T-Shirts</MenuItem>
      <MenuItem value="saree">Saree</MenuItem>
      <MenuItem value="lengha_choli">Lengha Choli</MenuItem>

    </Select>
  </FormControl>
</Grid>

 <Grid item xs={12}>
 <TextField
 fullWidth
 id="outlined-multiline-static"
 label="Description"
 multiline
 name="description"
 rows={3}
 value={productData.description}
 onChange={handleChange}
 
 />
</Grid>


          </Grid>
        </form>
    </Fragment>
    <div>

    </div>
  )
}

export default CreateProductForm