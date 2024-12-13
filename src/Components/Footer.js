import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, colors, Grid } from "@mui/material";

import exlogo from '../images/exam-keeda-white.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div>
            <Box className='footer-set0'>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box>
                <img src={exlogo} alt="" width={'50%'} />
              </Box>
              <Box>
                <p className="footer-set">Exam Keeda is an online practice platform that has been operating since 2024 until now.</p>
              </Box>
              <Box>
                <ul style={{ display: 'flex', alignItems: 'center' }}>
                  <li><a href="" className="footer-set1"><InstagramIcon /></a></li>
                  <li><a href="" className="footer-set1"><XIcon /></a></li>
                  <li><a href="" className="footer-set1"><LinkedInIcon /></a></li>
                  <li><a href="" className="footer-set1"><FacebookIcon /></a></li>
                </ul>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box sx={{ marginTop: '2rem', paddingLeft: '8rem' }}>
                <Box><p className="footer-set2">Menu</p></Box>
                <Box>
                  <a href="" className="footer-set3">Home</a>
                  <a href="" className="footer-set3">Tutorials</a>
                  <a href="" className="footer-set3">Typing Practice</a>
                  <a href="" className="footer-set3">Blog</a>
                  <a href="" className="footer-set3">Contact Us</a>
                </Box>
              </Box>

            </Grid>

            <Grid item xs={4}>
              <Box sx={{ marginTop: '2rem', paddingLeft: '6rem' }}>
                <Box><p className="footer-set2">About</p></Box>
                <Box>
                  <a href="" className="footer-set3">Contact Us</a>
                  <a href="" className="footer-set3">Privacy & Policy</a>
                  <a href="" className="footer-set3">Term & Service</a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: '#5cc43e', padding: '0.75rem' }}>
        <Container>
          <h3 className="footer-end">© 2024 All Rights Reserved by Exam Keeda</h3>
        </Container>
      </Box>

    </div>
  )
}

export default Footer
