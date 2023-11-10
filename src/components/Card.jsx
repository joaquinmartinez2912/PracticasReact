import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';

export default function BasicCard({data}) {
    const {id, title, completed} = data  
  
    return (
    <Card style={{margin: "25px", maxWidth:"20px", height:"200px", backgroundColor:"#FAFAFA", border: "solid 3px #09789B"}} sx={{ minWidth: 275 }}  >
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {id}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <p>Completa: {completed ? <CheckCircleRoundedIcon color="success"/> : <DoNotDisturbOnIcon  style={{ color: 'red' }}  /> }</p>
        </Typography>
      </CardContent>
    </Card>
  );
}