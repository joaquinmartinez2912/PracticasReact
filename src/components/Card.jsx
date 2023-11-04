import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function BasicCard({data}) {
    const {id, title, completed} = data  
  
    return (
    <Card style={{margin: "10px", maxWidth:"20px"}} sx={{ minWidth: 275 }}  >
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {id}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <p>Compelta: {completed ? "Yes" : "No"}</p>
        </Typography>
      </CardContent>
    </Card>
  );
}