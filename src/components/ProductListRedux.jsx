import {
    Box,
    Pagination,
    Stack,
    Typography,
    CircularProgress,
    TextField,
  } from "@mui/material";
  import Grid from "@mui/material/Grid2";
  import React, { useEffect, useState } from "react";
  import Product from "./Product";
  import SkeletonProduct from "./SkeletonProduct";
import { fetchProductList } from "../store/productSlice";
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from "../hooks/useDebounce";
  
  const ProductListRedux = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const debounceSearch = useDebounce(searchTerm, 500);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const {isLoading, error, products, totalPages} = useSelector(store => store?.products)
  
    const handlePagechange = (e, value) => {
      setPage(value);
    };
  
    useEffect(() => {
      dispatch(fetchProductList({page, search : debounceSearch}));
    }, [page, debounceSearch]);

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
          <>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
            <Typography variant="h3" gutterBottom>
              Product List Redux
            </Typography>
            <TextField value={searchTerm} size="small" placeholder="Search products..." onChange={(e) => setSearchTerm(e.target.value)} />
          </Stack>
            <Grid
              container
              spacing={5}
              xs={1}
              sm={3}
              md={4}
              sx={{
                backgroundColor: "#E5E4E2",
                padding: "1rem",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
              }}
            >
              {products.map((product) => (
                <Grid item={true.toString()} key={product.id}>
                  {isLoading ? <SkeletonProduct /> : <Product data={product} />}
                </Grid>
              ))}
              {!products?.length && <Typography color="textDisabled"> No Products Found </Typography> }
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
      </Box>
    );
  };
  
  export default ProductListRedux;
  