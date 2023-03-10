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

import NightlightIcon from '@mui/icons-material/Nightlight';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import AddBoxIcon from '@mui/icons-material/AddBox';

import Link from '@mui/material/Link';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


import IconButton from '@mui/material/IconButton';

import Divider from '@mui/material/Divider';


import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

export default function App() {
  return (
    <div>
      <Container fixed sx={{mt:5}}>
      <Link fixed size="large"  color="#78909c">제조사</Link>
      -
      <Link fixed size="large"  color="#78909c">product name</Link>
      <FirstCard></FirstCard>
      <Typography fixed sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
        이 제품의 효과 
      </Typography>
      <SecondCard></SecondCard>
      <Typography fixed sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
        추천 섭취 시간 및 복용법
      </Typography>
      <ThirdCard></ThirdCard>
      <Typography fixed sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
        제품 리뷰
      </Typography>
      </Container>
     
    </div>
  );
}

const styling ={
  container:{
    paddingtop: 2
  }
}



function FirstCard() {
  return (
      <Card sx={{mt:0,amt:10}}>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
          sx={{mt:5,mr:5}}
        >
        <OutlinedButtons  ></OutlinedButtons>
        </Box>
        <Grid container>
          <Grid item  sx={{mt:0,mb:5,mr:0}}>
            <CardMedia 
            sx={{ml:5, height: 400,width:200 }}
            image="https://questlife.co.kr/web/product/big/202107/f23dcb994e95fc8258874500da0313e2.png"
            //title=
            />
          </Grid >
          <Card sx={{mt:8,mb:5}}>
          <Grid xs item  sx={{mt:3,ml:3,mr:10}}>
            <CardActions sx={{ml:1,mb:2}} >
              <Link  size="large"  color="#78909c">제조사</Link>
            </CardActions>
          <CardContent>
            <Typography variant="h3" sx={{mt:-4,fontSize: 30 }} color="text.secondary" gutterBottom>
            product name
            </Typography>
            <Grid container>
              <Grid item >
              <TextRating ></TextRating>
            </Grid>
            <Grid item sx={{mb:10}} >
              <Link color="#7e57c2">리뷰</Link>
              </Grid>
            </Grid>
            < GutterlessList></ GutterlessList>
          </CardContent>
        </Grid>
        </Card>
          <Grid xs item sx={{mt:0,ml:3}}>
            <Typography  variant="h3" component="div" sx={{ml:0,mr:5,mt:10,fontSize:30 }}   gutterBottom>
            최저가
            </Typography>
            < BasicList></BasicList>
            </Grid>
            <Grid item sx={{mt:0}}>
            <Link variant="h3" component="div" sx={{ml:0,mr:5,mt:10,fontSize:30 }}   gutterBottom>xxxx원</Link>
            </Grid>
        </Grid>
      </Card>
     
  );
}

function SecondCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 20 }}  gutterBottom>
          주요 기능
        </Typography>
        <BasicChips ></BasicChips>
        <Typography variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 20 }}  gutterBottom>
          보조 기능
        </Typography>
        <BasicChips ></BasicChips>
      </CardContent>
    </Card>
  );
}

function ThirdCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Grid container>
        <Grid item xs>
        <Typography  variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 20  }} startIcon={<Brightness5Icon/>} gutterBottom>
          아침, 식후
        </Typography>
        </Grid>
        <Grid item sx={{ml:3,mt:3,fontSize: 20 }}>
        <BasicChips2 ></BasicChips2>
        </Grid>
        </Grid>
        <Divider sx={{mt:2}} variant="middle" />
        <Grid container>
        <Grid item xs>
        <Typography  variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 20 }} startIcon={<NightlightIcon/>}  gutterBottom>
          저녁, 식후
        </Typography>
        </Grid>
        <Grid item sx={{ml:3,mt:3,fontSize: 20 }}>
        <BasicChips2 ></BasicChips2>
        </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function ForthCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Grid container>
        <Grid item xs>
        <Typography  variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 20  }} startIcon={<Brightness5Icon/>} gutterBottom>
          아침, 식후
        </Typography>
        </Grid>
        <Grid item sx={{ml:3,mt:3,fontSize: 20 }}>
        <BasicChips2 ></BasicChips2>
        </Grid>
        </Grid>
        <Divider sx={{mt:2}} variant="middle" />
        <Grid container>
        <Grid item xs>
        <Typography  variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 20 }} startIcon={<NightlightIcon/>}  gutterBottom>
          저녁, 식후
        </Typography>
        </Grid>
        <Grid item sx={{ml:3,mt:3,fontSize: 20 }}>
        <BasicChips2 ></BasicChips2>
        </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function BasicChips() {
  return (
    <Stack sx={{ml:3}}direction="row" spacing={1}>
      <Chip label="text"  variant="outlined"/>
      <Chip label="text" variant="outlined" />
    </Stack>
  );
}

function BasicChips2() {
  return (
    <Stack sx={{ml:3}}direction="row" spacing={1}>
      <Chip label="text"  />
    </Stack>
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
  const value = 4;

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
      <Button  color="success" variant="outlined" href="#outlined-buttons" endIcon={<AddBoxIcon/>}>
        내가 먹는 영양제에 추가
      </Button>
  );
}

function GutterlessList() {
  return (
    <Grid container>
    <Grid item xs sx={{mt:0,amt:3,ml:2}}>
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
    
  );
}

function BasicList() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="text 1" />
              <ListItemText primary="xxxx원" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="text 2" />
              <ListItemText primary="xxxx원" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="text 3" />
              <ListItemText primary="xxxx원" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}