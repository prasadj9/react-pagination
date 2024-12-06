import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Paper,
} from "@mui/material";
const SkeletonProduct = () => {
  return (
    <Paper elevation={0}>
      <Card sx={{ maxWidth: 350, minWidth : 300, paddingTop : "1rem" }}>
        <Skeleton height={200} width={"90%"} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Skeleton width={"70"} height={50} />
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <Skeleton height={100}  />
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}><Skeleton width={60} height={30} /></Typography>
          <Typography variant="body2" color="text.secondary"><Skeleton width={50} height={20} /></Typography>
          <Chip label={`Rating:`}  sx={{ mt: 1 }} />
        </CardContent>
      </Card>
    </Paper>
  );
};

export default SkeletonProduct;
