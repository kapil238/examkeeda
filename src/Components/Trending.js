import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import framework from '../images/framework.webp'
import EastIcon from '@mui/icons-material/East';
const ThingCard = ({thingimg,title,list}) => {
  return (
    <>
     
          <Card sx={{ width: "33.33%" }} className="thing-card">
            <CardContent sx={{ padding: "8px" }}>
              <Box>
                <img
                  src={thingimg}
                  alt=""
                  width={"100%"}
                  className="thing-img"
                />
              </Box>
              <Box >
                <h1 className="thing-card1">{title}</h1>
              </Box>
              <Box sx={{display:'flex',alignItems:'center'}}>
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Remy Sharp" src={framework} />        
                </Stack>
                <Box>
                  <Typography
                    sx={{ fontSize: 16 ,paddingLeft:'14px '}}
                    color="text.secondary"
                    gutterBottom
                  >
                    Frameworks
                  </Typography>
                </Box>
              </Box>
              <Box >
              <Typography variant="body2" color="text.secondary">
                <p className='thing-card2'>{list}</p>
        </Typography>
              </Box>
              <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <p style={{color:'rgb(92, 196, 62)'}}>Read more</p>
                <EastIcon/>
              </Box>
            </CardContent>
          </Card>
      
    </>
  );
};

export default ThingCard;
