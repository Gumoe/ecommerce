import { Grid } from '@mui/material'
import React from 'react'
import OrderTable from '../view/OrderTableView'
import Achivement from './Achivement'
import MonthlyOverview from './MonthlyOverview'
import ProductsTable from './ProductsTable'

const AdminDashBoard = () => {
  return (
    <div className='px-10'>
        <Grid container spacing={5}>
            <Grid  item xs={12} md={4}>
              <div className='shadow-lg shadow-gray-600'>
<Achivement/>
              </div>

                

            </Grid>
            <Grid  item xs={12} md={8}>
            <div className='shadow-lg shadow-gray-600'>
<MonthlyOverview/>
</div>
            
            </Grid>
            <Grid  item xs={12} md={6}>
            <div className='shadow-lg shadow-gray-600'>
<OrderTable/>
</div>
                
            </Grid>
            <Grid  item xs={12} md={6}>
            <div className='shadow-lg shadow-gray-600'>
<ProductsTableView/>
</div>
                
            </Grid>
            


        </Grid>
    </div>
  )
}

export default AdminDashBoard