import React from "react";
import "./style.css";

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import CardMedia from '@mui/material/CardMedia';


import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';

import ShareIcon from '@mui/icons-material/Share';

import Link from '@mui/material/Link';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import IconButton from '@mui/material/IconButton';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function App() {
  return (
    <div>
      <Container fixed>
      <BasicCard ></BasicCard>
      </Container>
    </div>
  );
}

const styling ={
  container:{
    paddingtop: 2
  }
}



function BasicCard() {
  return (
    <Card fixed sx={{amt:20, minWidth: 200 }}>
      <Grid container>
        <Grid item  sx={{mt:5,mb:5,mr:0}}>
          <CardMedia 
          sx={{ml:5, height: 600,width:200 }}
          image="https://questlife.co.kr/web/product/big/202107/f23dcb994e95fc8258874500da0313e2.png"
          //title=
          />
        </Grid >
        <Grid item  sx={{mt:20,ml:10,mr:20}}>
          <CardActions >
            <Button  size="large">제조사</Button>
          </CardActions>
        <CardContent>
          <Typography sx={{mt:-4,fontSize: 30 }} color="text.secondary">
          제품명
          </Typography>
          <Grid container>
            <Grid item xs>
            <TextRating ></TextRating>
          </Grid>
          <Grid item sx={{mb:10}} >
            <Link>리뷰</Link>
            </Grid>
          </Grid>
          < GutterlessList></ GutterlessList>
        </CardContent>
      </Grid>
        <Grid item sx={{mt:5,mb:5,ml:20}}>
          <OutlinedButtons ></OutlinedButtons>
        </Grid>
      </Grid> 
    </Card>
  );
}

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};


function TextRating() {
  const value = 3.5;

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}

function OutlinedButtons() {
  return (
      <Button variant="outlined" href="#outlined-buttons" endIcon={<ShareIcon/>}>
        share 
      </Button>
  );
}

function GutterlessList() {
  return (

    <Card sx={{bgcolor:"#81d4fa"}}> 
    <Grid container>
    <Grid item xs sx={{mt:2.5,amt:3,ml:2}}>
      랭킹
    </Grid>
    <Grid item >
      <List sx={{ width: '100%', maxWidth: 360}}>
        {[1, 2, 3].map((value) => (
          <ListItem
            key={value}
            disableGutters
            secondaryAction={
              <IconButton aria-label="ChevronRight">
                <ChevronRightIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`text ${value}`} />
          </ListItem>
        ))}
      </List>
      </Grid>
      </Grid>
    </Card>
  );
}