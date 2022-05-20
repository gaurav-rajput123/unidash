import React from "react";
import { Typography, Grid, Button, IconButton, Card } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Pattern from "../images/Pattern.png";
import Pattern2 from "../images/Pattern2.png";
import Pattern3 from "../images/Pattern3.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import './pattern.css'

export default function Section2() {
  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <Students />
        
      </Grid>

      <Grid item xs={12} lg={6}>
        <Updates/>
      </Grid>
    </Grid>
  );
}

//courses tabs function

export function SimpleAccordion() {
  return (
    <div>
    <Grid container>
      <Grid item xs={6} sx={{ padding: "2% 2%" }}>
        <Typography variant="h6" fontFamily="poppins">
          <b>Latest Updates</b>
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ padding: "2% 1%" }}>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Grid>
    </Grid>
      <Accordion sx={{ marginBottom: "1%", width: "90%" }}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography fontFamily="poppins">01. Name of College ABX</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion sx={{ marginBottom: "1%", width: "90%" }}>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography fontFamily="poppins">
            02. Bachelor Business College
          </Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion sx={{ marginBottom: "1%", width: "90%" }}>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography fontFamily="poppins">
            03. Aircraft Maintenance College
          </Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion sx={{ marginBottom: "1%", width: "90%" }}>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography fontFamily="poppins">
            04. Commercial Licence Pilot College
          </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}

// students card function
export function Students() {
  return (
    <Card sx={{ marginBottom: "2%", width: "99%", height:'96%' }}>
      <Grid container>
        <Grid item xs={10} sx={{ padding: "2% 4%" }}>
          <Typography variant="h6" fontFamily="poppins">
            <b>Students Overview</b>
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{ padding: "2% 1%" }}>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Grid>

        <Grid container sx={{ padding: "1% 4%" }}>
          <Grid item xs={12} lg={3} sx={{ marginTop: "10%" }}>
            <img src={Pattern2} alt="pattern" />
            <Typography fontFamily="poppins">
              <b>MRSPTU</b>
            </Typography>
            <Typography variant="h4" fontFamily="poppins">
              <b>2,095</b>
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} className='pattern' >
              <Typography textAlign='center' marginTop='20%'>Total Students</Typography>
          </Grid>
          <Grid item xs={12} lg={3} sx={{ marginTop: "10%" }}>
            <img src={Pattern3} alt="pattern" />
            <Typography fontFamily="poppins">
              <b>OTHERS</b>
            </Typography>
            <Typography variant="h4" fontFamily="poppins">
              <b>2,360</b>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

//updates card function
export function Updates() {
  const Users = [
    {
      id: "01",
      date: "12th APRIL 2022",
      update: "New Partnered Organization",
      time: "10.30am",
    },
    {
      id: "02",
      date: "11th APRIL 2022",
      update: "Updation in DSA Course",
      time: "01.15pm",
    },
    {
      id: "03",
      date: "10th APRIL 2022",
      update: "Monthly Earning Statistics",
      time: "10.30am",
    },
    {
      id: "04",
      date: "09th APRIL 2022",
      update: "Platform related Updates",
      time: "01.15pm",
    },
  ];

  return (
    <Card sx={{ marginBottom: "2%", width: "99%" }}>
      <Grid container>
        <Grid item xs={10} sx={{ padding: "2% 4%" }}>
          <Typography variant="h6" fontFamily="poppins">
            <b>Latest Updates</b>
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{ padding: "2% 1%" }}>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Grid>
      </Grid>

      <ul>
        {Users.map((data) => (
          <li key={data.id}>
            <Typography sx={{ color: "#00C897", fontFamily: "poppins" }}>
              <b>{data.date}</b>
            </Typography>
            <Grid container sx={{ marginBottom: "1%" }}>
              <Grid item xs={8} lg={9}>
                <Typography sx={{ fontFamily: "poppins", marginBottom: "1%" }}>
                  {data.update}
                </Typography>
              </Grid>
              <Grid item xs={2} lg={3}>
                <Typography sx={{ fontFamily: "poppins", marginBottom: "1%" }}>
                  {data.time}
                </Typography>
              </Grid>
            </Grid>
          </li>
        ))}
      </ul>
    </Card>
  );
}
