import React from 'react';
import { Typography, Grid, Button, Card, Avatar, ImageList } from '@mui/material';
import AvatarImage from '../images/AvatarImage.png';

export default function Section3(){

    let arr =[]
    let c1 = {
        picture: AvatarImage ,
        headname:'Dr. Brain Kendrick',
        designation:'MANAGING TRUSTEE'
        

    }

    let c2 = {
        picture: AvatarImage ,
        headname:'Dean. Antony Charles',
        designation:'MANAGING TRUSTEE'
       

    }

    let c3 = {
        picture: AvatarImage ,
        headname:'Dean. Antony Charles',
        designation:'MANAGING TRUSTEE'
       
    }
    let c4 = {
        picture: AvatarImage ,
        headname:'Dr. Brain Kendrick',
        designation:'MANAGING TRUSTEE'
       
    }
    let c5 = {
        picture: AvatarImage ,
        headname:'Dean. Antony Charles',
        designation:'MANAGING TRUSTEE'
       
    }

    for (let i = 0; i < 1; i++){
        arr.push(c1)
        arr.push(c2)
        arr.push(c3)
        arr.push(c4) 
        arr.push(c5)
       
      }


    return(
    <Card>
       <Grid container marginBottom='2%'>
            <Grid item xs={12} lg={7}>
               <Typography variant='h5' fontFamily='poppins' fontWeight='bold'>Faculties</Typography>
            </Grid>
            <Grid item xs={12} lg={1} textAlign='center'>
                <Button>HOD's</Button>
            </Grid>
            <Grid item xs={12} lg={1} textAlign='center'>
                <Button>Director</Button>
            </Grid>
            <Grid item xs={12} lg={1} textAlign='center'>
                <Button>Principal</Button>
            </Grid>
            <Grid item xs={12} lg={1} textAlign='center'>
               <Button>Professor</Button>
            </Grid>
       
        
       <Grid container>
       <ImageList className='scroll' sx={{ display: "flex"  }} >
       {arr.map((val, index) => {
        return <AvatarComponent key={index}  picture={val.picture} headname={val.headname} 
        designation={val.designation}  />
         })}
       </ImageList>
       </Grid> 
       </Grid>
    </Card>
    )
}





export function AvatarComponent({picture, headname, designation}){
    return(
        <Grid container display='block'>
          <Grid container item xs={12} direction='row' justifyContent='center' alignItems='center'>
            <Avatar src={picture} sx={{width:'170px', height:'170px', marginBottom:'2%'}}></Avatar>
            <Typography variant='h6' fontFamily='poppins' fontWeight='bold' marginBottom='2%'>{headname}</Typography>
            <Typography fontFamily='poppins'color='grey' fontSize='14px'>{designation}</Typography>
          </Grid>
</Grid>
    )
}

