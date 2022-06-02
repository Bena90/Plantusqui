import{ createContext } from 'react';
import useGet from '../hook/useGet';

export const ProductContext = createContext ({});
ProductContext.displayName = "Products"

const ProductProvider = ({children}) => {
    const {products, isLoading, error } = useGet();

    return(
        <ProductContext.Provider value={{products, isLoading, error}}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider
