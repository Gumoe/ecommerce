// import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
// import React from 'react'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// const OrderTable = () => {
//   const [anchorEl, setAnchorEl] = React.useState([]);
//   const open = Boolean(anchorEl);

//   const handleClick = (event,index) => {
//         const newAchorElarray = [...anchorEl];
//     newAnchorElarray[index] = event.currentTaget
//     const newAchorElarray=[...anchorEl];
//     newAnchorElarray[index]=null
//     setAnchorEl(newAchorElarray);
//   };
//   const handleClose = (index) => {
//     const newAchorElarray=[...anchorEl];
//     // newAnchorElarray[index]=null
//     setAnchorEl(newAchorElarray);
//   };
//   const dispatch = useDispatch()

//   const { adminOrder } = useSelector(store => store)

//   useEffect(() => {
//     dispatch(getOrders())
//   }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered,adminOrder.deletedOrder])
//   // console.log("admin Orders", adminOrder)

//   const handleShipedOrder = (orderId) > {
//     dispatch(shipOrder(orderId));
//     handleClose();
// }
// const handleConfirmedOrder = (orderId) > {
//   dispatch(confirmedOrder(orderId));
// console.log("handle confirmed Order",orderId)
//   handleClose();
// };
// const handleDeliveredOrder = (orderId) > {
//   dispatch(deliveredpOrder(orderId));
//   console.log("handle delivered Order",orderId)
//   handleClose();
//   };

// const handleDeletedOrder = (orderId) > {
//   dispatch(deleteOrder(orderId))

//   };


// return (
//   <div className='p-10'>
//     <Card className='mt-2 bg-[#1b1b1b]'>
//       <CardHeader title="All Products" />
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Image</TableCell>
//               <TableCell align="left">Title</TableCell>
//               <TableCell align="left">Id</TableCell>
//               <TableCell align="left">Price</TableCell>
//               <TableCell align="left">Status</TableCell>
//               <TableCell align="left">Update</TableCell>
//               <TableCell align="left">Delete</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {adminOrder.orders?.map((item,index) => (
//               <TableRow
//                 key={item.name}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell align="left">
//                   <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
//                     {item.orderItems.map((orderItem) => <Avatar src={orderItem.product.imageUrl}></Avatar>)}
//                   </AvatarGroup>

//                 </TableCell>

//                 <TableCell align="th" scope="row">
//                   {item.orderItems.map((orderItem) => <p >{orderItem.product.title}</p>)}
//                   {/* {item.title} */}
//                 </TableCell>

//                 <TableCell align="left">{item.Id}</TableCell>
//                 <TableCell align="left">{item.totalPrice}</TableCell>
//                 <TableCell align="left"><span className={` text-white px-5 py-2 rounded-full
//               ${item.orderStatus === "CONFIRMED" ? "bg-[#367c36]" :
//                     item.orderStatus === "SHIPPED" ? "bg-[#4141ff]" :
//                       item.orderStats === "PLACED" ? "bg-[#02B290]" :
//                         item.orderStats === "PENDING" ? "bg-[gray]" :
//                           "bg-[#025720]"}`}>{item.orderStatus}</span></TableCell>
//                 <TableCell align="left">
//                   <Button
//                     id="basic-button"
                   
//                     aria-haspopup="true"
                
//                     onClick={(event)=>handleClick(event,index)}
//                     aria-controls={`basic-menu-${item.id}`}
//                     aria-expanded={Boolean(anchorEl[index])}

//                   >
//                     Status
//                   </Button>
//                   <Menu
//                     id={`basic-menu-${item.id}`}
//                     anchorEl={anchorEl[index]}
//                     open={Boolean(anchorEl[index])}
//                     onClose={()=> handleClose(index)}
//                     MenuListProps={{
//                       'aria-labelledby': 'basic-button',
//                     }}
//                   >
//                     <MenuItem onClick={() => handleConfirmedOrder(item.id)}>Confirmed Order</MenuItem>
//                     <MenuItem onClick={() => handleShipedOrder(item.id)}>Shipped Order</MenuItem>
//                     <MenuItem onClick={() => handleDeliveredOrder(item.id)}>Delivered Order</MenuItem>
//                   </Menu>
//                 </TableCell>
//                 <TableCell align="left">
//                   <Button onClic={() => handleDeleteOrder(item.id)} 
//                   variant="outlined"
                   
//                 >
//                   Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Card>
//   </div>
// )
// }

// export default OrderTable