import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Grid, ImageList, Avatar, Card} from '@mui/material';
import AvatarImage from '../images/AvatarImage.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function StepperComponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  return (
    <Card sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Grid container sx={{margin:'1% 2%'}}>
        <Grid item xs={12} lg={7}>
               <Typography variant='h5' fontFamily='poppins' fontWeight='bold'>Faculties</Typography>
        </Grid>
        <Grid item xs={12} lg={5}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="HOD's" {...a11yProps(0)} />
          <Tab label="DIRECTOR" {...a11yProps(1)} />
          <Tab label="PRINCIPAL" {...a11yProps(2)} />
          <Tab label="PROFESSOR" {...a11yProps(3)} />
        </Tabs>
        </Grid>
        </Grid>
      </Box>
      <TabPanel value={value} index={0}>
        <ImageList className="scroll" sx={{ display: "flex" }}>
          {arr.map((val, index) => {
              
            return (
              <AvatarComponent
                key={index}
                picture={val.picture}
                headname={val.headname}
                designation={val.designation}
              />
            );
          })}
        </ImageList>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <ImageList className="scroll" sx={{ display: "flex" }}>
      {arr.map((val, index) => {
          if(index > 2) {
              return null
          }
        return (
          <AvatarComponent
            key={index}
            picture={val.picture}
            headname={val.headname}
            designation={val.designation}
          />
        );
      })}
    </ImageList>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <ImageList className="scroll" sx={{ display: "flex" }}>
      {arr.map((val, index) => {
        return (
          <AvatarComponent
            key={index}
            picture={val.picture}
            headname={val.headname}
            designation={val.designation}
          />
        );
      })}
    </ImageList>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <ImageList className="scroll" sx={{ display: "flex" }}>
      {arr.map((val, index) => {
        return (
          <AvatarComponent
            key={index}
            picture={val.picture}
            headname={val.headname}
            designation={val.designation}
          />
        );
      })}
    </ImageList>
      </TabPanel>
    </Card>
  );
}

// Avatar component
export function AvatarComponent({ picture, headname, designation }) {
  return (
    <Grid container display="block">
      <Grid
        container
        item
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          src={picture}
          sx={{ width: "170px", height: "170px", marginBottom: "2%" }}
        ></Avatar>
        <Typography
          variant="h6"
          fontFamily="poppins"
          fontWeight="bold"
          marginBottom="2%"
        >
          {headname}
        </Typography>
        <Typography fontFamily="poppins" color="grey" fontSize="14px">
          {designation}
        </Typography>
      </Grid>
    </Grid>
  );
}
