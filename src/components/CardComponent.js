import React from 'react';
import { Typography, Card, Grid, IconButton, Paper } from '@mui/material';



export default function CardComponent({Heading, Value, Picture}){
    return(
        <Paper
      sx={{
        p: 2,
        border:'1px solid #c9cdd0',
        width:'99%',
        height: 'auto',
        flexGrow: 1,
        marginBottom:'2%',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container>
         <Grid item xs={6} lg={6} marginTop='4%'>
            <Typography variant='h7' sx={{fontFamily:'poppins', marginTop:'2%', color:'grey'}}>{Heading}</Typography>
            <Typography variant='h3' fontFamily='poppins'><b>{Value}</b></Typography>
         </Grid>
         <Grid item xs={6} lg={6}>
           <IconButton>
           <img src={Picture} alt='image'/>
           </IconButton>
         </Grid>
      </Grid>
    </Paper>
    )
}