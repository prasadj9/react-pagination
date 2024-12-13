import axios from "axios";
import { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 12;
  const fetchProducts = async (page = 1) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://dummyjson.com/products/?limit=${limit}&skip=${page * limit - limit}`
      );
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / limit));
    } catch (error) {
      setError("Error while fetching data");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(1);
  }, [])

  return { products, totalPages, isLoading, error, fetchProducts };
};

export default useProduct;
