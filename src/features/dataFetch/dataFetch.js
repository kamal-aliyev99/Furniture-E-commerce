import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProductsData, setErrorData } from '../products/productsSlice'


const useDataFetch = (initialData = {}) => {
  const dispatch = useDispatch();
  const [productsData, setProductsDatas] = useState(initialData);
  const [allProducts, setAllProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [allCollections, setAllCollections] = useState([]);
  const apiUrl = "http://localhost:8080";
  const [getProductsError, setGetProductsError] = useState("");
  // const [getDataError, setDataError] = useState("");
  const [loading, setLoading] = useState(true);

  //  G E T    A L L    P R O D U C T S
  const getProducts = () => {
    const getAllProducts = async () => {
      fetch(`${apiUrl}/v1/product`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("HTTP Error Code: " + res.status);
            }
            return res.json();
        })
        .then((data) => {
          setAllProducts(data);
          setLoading(false);       
        })
        .catch((error) => {
            console.error(error);
            setLoading(false);
            setGetProductsError("error");
        });
    };

    const getAllCategories = async () => {
      fetch(`${apiUrl}/category`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("HTTP Error Code: " + res.status);
            }
            return res.json();
        })
        .then((data) => {
            setAllCategories(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setLoading(false);
            setGetProductsError("error");
        });
    };

    const getAllCollections = async () => {
      fetch(`${apiUrl}/collection`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("HTTP Error Code: " + res.status);
            }
            return res.json();
        })
        .then((data) => {
            setAllCollections(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setLoading(false);
            setGetProductsError("error");
        });
    };

    getAllProducts();
    getAllCategories();
    getAllCollections();
  }
  useEffect(() => {
    if (allProducts.length != 0 || allCategories.length != 0 || allCollections.length != 0) {
      dispatch(setProductsData({ allProducts, allCategories, allCollections , getProductsError, loading}));
    } else if (getProductsError) {
      dispatch(setErrorData({getProductsError})); 
    }
  }, [allProducts, allCategories, allCollections, getProductsError])
  
          //    A D D    P R O D U C T
  const addProduct = async (newProduct) => {
    try {
      const response = await fetch(`${apiUrl}/v1/product`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(newProduct), 
      });
      if (response.ok) {
        alert(`${response.status} Product uploaded successfully`);
        getProducts();
      } else {
        alert(`Error occurred while sending data: ${response.status}`)
      }
    } catch (error) {
      alert(`Error occurred while sending the data: ${error}`)
    }
  };

      //      D E L E T E     P R O D U C T
  const deleteProduct = async (productId) => {
    try {      
      const res = await fetch(`${apiUrl}/v1/product/${productId}`, {
        method: 'DELETE',
      });
      if (res.ok) {alert
        alert(`Product (ID: ${productId}) deleted successfuly.`);
        getProducts();
      } else {
        alert('Error occurred while deleting the product.');
      }
    } catch (error) {
      alert('Error occurred while deleting the product:', error);
    }
  };

      //   A D D    C A T E G O R Y 
      const addCategory = async (newCategory) => {
        try {
          const response = await fetch(`${apiUrl}/category`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(newCategory), 
          });
          if (response.ok) {
            alert(`${response.status}: Category uploaded successfully`);
            getProducts(); 
          } else {
            alert(`Error occurred while sending data: ${response.status}`)
          }
        } catch (error) {
          alert(`Error occurred while sending the data: ${error}`)
        }
      };

      //    D E L E T E    C A T E G O R Y   
      const deleteCategory = async (productId) => {
        try {          
          const res = await fetch(`${apiUrl}/category/${productId}`, {
            method: 'DELETE',
          });
          if (res.ok) {
            alert(`Product (ID: ${productId}) deleted successfuly.`);
            getProducts();
          } else {
            alert('Error occurred while deleting the product.');
          }
        } catch (error) {
          alert('Error occurred while deleting the product:', error);
        }
      };

      //    A D D    C O L L E C T I O N
      const addCollection = async (newCollection) => {
        try {
          const response = await fetch(`${apiUrl}/collection`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(newCollection), 
          });
          if (response.ok) {
            alert(`${response.status}: Collection uploaded successfully`);
            getProducts();
          } else {
            alert(`Error occurred while sending data: ${response.status}`)
          }
        } catch (error) {
          alert(`Error occurred while sending the data: ${error}`)
        }
      };

      //    D E L E T E    C O L L E C T I O N
      const deleteCollection = async (productId) => {
        try {          
          const res = await fetch(`${apiUrl}/collection/${productId}`, {
            method: 'DELETE',
          });
          if (res.ok) {
            alert(`Product (ID: ${productId}) deleted successfuly.`);
            getProducts();
          } else {
            alert('Error occurred while deleting the product.');
          }
        } catch (error) {
          alert('Error occurred while deleting the product:', error);
        }
      };

  return { productsData, getProductsError, loading,
      getProducts, addProduct, deleteProduct,
      addCategory, deleteCategory,
      addCollection, deleteCollection, 
      };
};

export default useDataFetch