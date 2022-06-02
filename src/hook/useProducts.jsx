import { useContext } from "react";
import { ProductContext } from "../context/productContext";

const useProducts = () => useContext(ProductContext);

export default useProducts;