import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Paper } from "@mui/material";

const Product = ({data}) => {
  
  return (
    <Paper elevation={0}>

    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        sx={{ height: "40%" }}
        image={ data.thumbnail}
        title={data.title}
        loading="lazy"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {data.description}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          ${data.price.toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.availabilityStatus}
        </Typography>
        <Chip label={`Rating: ${data.rating.toFixed(1)} ⭐`} sx={{ mt: 1 }} />
        </CardContent>
    </Card>
        </Paper>
  );
};

export default Product;
