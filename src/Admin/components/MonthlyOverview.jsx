import { TrendingUp,AccountCircle } from '@mui/icons-material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreVertIcon from '@mui/icons-material/MoreVert';
<<<<<<< HEAD
import {Card, Avatar, Box, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
=======
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
>>>>>>> c9ed6add256ba1c0e4cce411b4bb3faaac555931

const salesData =[
    {
        stats:'245K',
        tittle:"Sales",
        color:"#E5D68A",
        icon:<TrendingUp sx={{fontSize:"1.75rem" }}/>
    },
    {
      stats:'1.54K',
      tittle:"Customers",
      color:"#22CB5C",
      icon:<AccountCircle sx={{fontSize:"1.75rem" }}/>
  },
  {
    stats:'12.5K',
    tittle:"Products",
    color:"DE4839",
    icon:<SettingsCellIcon sx={{fontSize:"1.75rem" }}/>
},
{
  stats:'88K',
  tittle:"Revenue",
  color:"#12B0E8",
  icon:<AttachMoneyIcon sx={{fontSize:"1.75rem" }}/>
}
]

const renderStats=()=>{
  return salesData.map((item,index)=>(
    <Grid item xs={12} sm={3} key={index}>
      <Box sx={{
        display:"flex", alignItems:'center'
      }}>
        <Avatar variant='rounded'sx={{
            mr:3,
            width:44,
            heighr:44,
            boxShadow:3,
            color:"common.white",
            backgroundColor:`${item.color}`
        }} >
          {item.icon}

        </Avatar>
        <Box sx={{display:'flex', flexDirection:'column'}}>

            <Typography variant='caption'>{item.tittle}</Typography>
            <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const MonthlyOverview = () => {
  return (
    <Card sx={{}}>
      <CardHeader title="Monthly Overview"
      action={
        <IconButton size='small'>
          <MoreVertIcon/>
        </IconButton>
      }
      subheader={
        <Typography variant='body2'>
          <Box component="span" sx={{fontWeight:600}}>
            Total 48.5% groth
          </Box>
          this month
        </Typography>
      }
      titleTypographyProps={{
        sx:{
          mb:2.5,
          lineHeight:'2rem !important',
          letterSpacing:'.15px !important'
        }
      }}
        />
      <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
        <Grid container spacing={[5,0]}>
         {renderStats()}

        </Grid>

      </CardContent>

    </Card>
  )
}

export default MonthlyOverview