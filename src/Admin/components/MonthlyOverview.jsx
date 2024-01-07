import { TrendingUp } from '@mui/icons-material'
import React from 'react'

const salesData =[
    {
        stats:'245K',
        tittle:"Sales",
        color:"primary",
        icon:<TrendingUp sx={{fontSize:"1.75rem" }}/>
    },
    {
      stats:'12.5K',
      tittle:"Customers",
      color:"success",
      icon:<AccountOutlined sx={{fontSize:"1.75rem" }}/>
  }
]

const MonthlyOverview = () => {
  return (
    <div>MonthlyOverview</div>
  )
}

export default MonthlyOverview