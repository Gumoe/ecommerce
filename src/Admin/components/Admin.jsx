
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, useMediaQuery, useTheme} from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const menu=[
    {name: "Dashboard", path:"/admin",icon:<DashboardIcon/>},
    {name: "Products", path:"/admin/products",icon:<DashboardIcon/>},
    {name: "Customers", path:"/admin/customers",icon:<DashboardIcon/>},
    {name: "Oders", path:"/admin/orders",icon:<DashboardIcon/>},
    {name: "AddProduct", path:"/admin/product/create",icon:<DashboardIcon/>},
    //{name: "", path:"},
]
const Admin = () => {

    const theme=useTheme();
    const isLargeScreen=useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisiable,setSideBarVisiable]=useState(false);
    const navigate=useNavigate();

    const drawer=(
        <Box
        sx={{
            overflow:"auto",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between"
        }}
        >

            {isLargeScreen && <Toolbar/>}
            <List>
                {menu.map((item,index)=> <ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>)}
            </List>

            <List>
                <ListItem  disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
    )

  return (
    <div>

        <Box
        sx={{display:`${isLargeScreen} ? "flex":"block"`}}>
            <CssBaseline/>

            <Drawer
            variant='permanent'
            >
                {drawer}
            </Drawer>

        </Box>

    </div>
  )
}

export default Admin;