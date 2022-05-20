import React from 'react';
import './App.css';
import Section1 from './components/Section1';
import Section3 from './components/Section3';
import Section2 from './components/Section2';
import { Divider, Grid, Card, Typography } from '@mui/material'
import StepperComponent from './components/StepperComponent';
import DataChart from './DataChart';
// import ChartCard from './components/ChartCard';

function App() {


  return (
    <Grid container className='app'>
      {/* <Grid item > */}
        <Section1 />
      {/* </Grid> */}
      <Grid item >
        <Section2 />
      </Grid>
      <DataChart />
      <Grid item xs={12} sx={{ marginBottom: '2%' }}>

      </Grid>
      <Grid item xs={12}>
        <StepperComponent />
        {/* <ChartCard/> */}
      </Grid>





    </Grid>
  );
}

export default App;
