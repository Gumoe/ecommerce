import { Grid } from '@mui/material'
import React from 'react'
import Achivement from './Achivement'

const AdminDashBoard = () => {
  return (
    <div className='px-10'>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>

                <Achivement/>

            </Grid>
            <Grid item xs={12} md={8}>

            </Grid>


        </Grid>
    </div>
  )
}

export default AdminDashBoard