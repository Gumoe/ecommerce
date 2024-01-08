<<<<<<< HEAD
=======
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, useMediaQuery, useTheme,Typography } from '@mui/material';
>>>>>>> 0c755f7abb6d66bdafe0af52d1d30f9f3f7b9759
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {
  Box,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateProductForm from './CreateProductForm';
import ProductsTable from './ProductsTable';
import OrderTable from './OrderTable';
import CustomersTable from './CustomersTable';
import AdminDashBoard from './DashBoard';
<<<<<<< HEAD

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
  { name: "AddProduct", path: "/admin/product/creat", icon: <DashboardIcon /> },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // border:"1px solid blue",
        height: "100%",
      }}
    >
      <>
        {/* {isLargeScreen && <Toolbar/>} */}
        <List>
          {menu.map((item, index) => (
            <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>

      <List>
        {<ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>}
      </List>
    </Box>
  );

  return (
    <div>
      <div className='flex h-[100vh] border border-black'>
        <CssBaseline />

        <div className='w-[15%] border border-r-gray-300 h-full'>
          {drawer}
        </div>

        <div className='w-[85%]'>
          <Routes>
            <Route path='/' element={<AdminDashBoard />} />
            <Route path='/product/create' element={<CreateProductForm />} />
            <Route path='/products' element={<ProductsTable />} />
            <Route path='/orders' element={<OrderTable />} />
            <Route path='/customers' element={<CustomersTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

=======

const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
    { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
    { name: "AddProduct", path: "/admin/product/creat", icon: <DashboardIcon /> },
];

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const drawer = (
        <Box
            sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                // border:"1px solid blue",
                height: "100%"
            }}
        >
            <>
                {/* {isLargeScreen && <Toolbar/>} */}
                <List>
                    {menu.map((item, index) => (
                        <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <Typography variant="body2">{item.name}</Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </>

            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <Typography variant="body2">Account</Typography>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <div className='flex h[100vh] border border-black'>
                <CssBaseline />

                <div className='w-[15%] border border-r-gray-300 h-full'>
                    {drawer}
                </div>

                <div className='w-[85%]'>
                    <Routes>
                        <Route path='/' element={<AdminDashBoard />} />
                        <Route path='/product/create' element={<CreateProductForm />} />
                        <Route path='/products' element={<ProductsTable />} />
                        <Route path='/orders' element={<OrderTable />} />
                        <Route path='/customers' element={<CustomersTable />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

>>>>>>> 0c755f7abb6d66bdafe0af52d1d30f9f3f7b9759
export default Admin;
