import React from 'react';
import { Typography, Button, Paper, Card, Grid } from '@mui/material';
import CardComponent from './CardComponent';
import Icon from '../images/Icon.png';
import Icon2 from '../images/Icon2.png';
import Icon3 from '../images/Icon3.png';
import Icon4 from '../images/Icon4.png'


export default function Section1() {
    return (
        <Grid container >
            <Grid item xs={12} lg={10} md={8} >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 4, md: 6 }}>
                    <Grid item lg={4} md={4}>
                        <CardComponent Heading='Total Students' Value='4,455' Picture={Icon} />
                    </Grid>
                    <Grid item lg={4} md={4} >
                        <CardComponent Heading='Our Professors' Value='178' Picture={Icon2} />
                    </Grid>
                </Grid>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 4, md: 6 }}>
                    <Grid item lg={4} md={4}>
                        <CardComponent Heading='Total Courses' Value='227' Picture={Icon3} />
                    </Grid>
                    <Grid item lg={4} md={4} >
                        <CardComponent Heading='Partnered Organizations' Value='1,669' Picture={Icon4} />
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={12} lg={4}>

            </Grid>
        </Grid>
    )
}

// <Grid item xs={12} lg={4}>
// <CardComponent Heading='Total Students' Value='4,455' Picture={Icon}/>
// </Grid>
// <Grid item xs={12} lg={4}>
// <CardComponent Heading='Our Professors' Value='178' Picture={Icon2}/>
// </Grid>

//<Grid item xs={12} lg={4}>
// <CardComponent Heading='Total Courses' Value='227' Picture={Icon3}/>
// </Grid>
// <Grid item xs={12} lg={4}>
//    <CardComponent Heading='Partnered Organizations' Value='1,669' Picture={Icon4}/>
// </Grid>