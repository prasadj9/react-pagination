import {
  Box,
  Pagination,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import useProduct from "../hooks/useProduct";

const ProductList = () => {
  const [page, setPage] = useState(1);
    const {products, isLoading, error, totalPages, fetchProducts} = useProduct();

  const handlePagechange = (e, value) => {
    setPage(value);
  };
  
  useEffect(() => {
    fetchProducts(page);
  }, [page]);
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "20px",
        padding: "20px",
      }}
    >
      {isLoading && <CircularProgress />}
      {error && <Typography color="error"> {error} </Typography>}
      {!isLoading && !error && (
        <>
          <Typography variant="h3" gutterBottom>
            Product List
          </Typography>
          <Grid container spacing={5}>
            {products.map((product) => (
              <Grid item={true.toString()} key={product.id}>
                <Product data={product} />
              </Grid>
            ))}
          </Grid>
          <Stack
            sx={{
              marginTop: 3,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pagination
              page={page}
              count={totalPages}
              onChange={handlePagechange}
              size="large"
              color="primary"
              variant="outlined"
            />
          </Stack>
        </>
      )}
    </Box>
  );
};

export default ProductList;
