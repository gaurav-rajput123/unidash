import React, { useEffect, useState } from 'react';
import { Typography, Button, Paper, Card, Grid } from '@mui/material';
import CardComponent from './CardComponent';
import Icon from '../images/Icon.png';
import Icon2 from '../images/Icon2.png';
import Icon3 from '../images/Icon3.png';
import Icon4 from '../images/Icon4.png'
import axios from 'axios';


export default function Section1() {
    const [details, setDetails] = useState({totalStudents: 0, totalTeachers: 0, totalCourses: 0})
    useEffect(
        () => {
        let fn = async  ()=>{
        try {
            const resp = await axios({
                url: "https://api.keewesolutions.com/university/getcount",
                method: 'GET'
            })
            setDetails({
                totalStudents: resp.data.response.courseStudent, totalTeachers: resp.data.response.courseUser, totalCourses: resp.data.response.courseDetails
            })
        }
        catch (error) {
            console.log(error)
        }
        
    }
    fn()

},[])
    return (
        <Grid container >
            <Grid item xs={12} lg={10} md={8} >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 4, md: 6 }}>
                    <Grid item lg={4} md={4}>
                        <CardComponent Heading='Total Courses Purchased' Value={details.totalStudents} Picture={Icon} />
                    </Grid>
                    <Grid item lg={4} md={4} >
                        <CardComponent Heading='Total Teachers' Value={details.totalTeachers} Picture={Icon2} />
                    </Grid>
                </Grid>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 4, md: 6 }}>
                    <Grid item lg={4} md={4}>
                        <CardComponent Heading='Total No Of Courses' Value={details.totalCourses} Picture={Icon3} />
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