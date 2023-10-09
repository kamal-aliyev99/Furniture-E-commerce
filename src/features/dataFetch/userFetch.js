import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from '../user/userSlice'


const useUserFetch = (initialData = {}) => {
    const dispatch = useDispatch();
    const {userId} = useSelector((state) => state.userData);
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const apiUrl = "http://localhost:8080";
    const [userData, setUserDatas] = useState({});

    //   L O G I N    
    const getUserData = async (email, password) => {
        try {
          const response = await fetch(`${apiUrl}/auth/login?email=${email}&password=${password}`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json', 
            },
          });
          if (response.ok) {
            const data = await response.json();
            setUserDatas(data);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
          } else {
            alert(`${response.status}: Error, email or password is wrong`)
          }
        } catch (error) {
          alert(`Error occurred while logging in: ${error}`)
        }
    }

    useEffect(() => {
        if ( Object.keys(userData).length !== 0 ) {
          dispatch(setUserData({ userData }));
          
        }
    }, [userData]);

    //   R E G I S T E R
    const registerUserData = async (newUser) => {
        try {
            const response = await fetch(`${apiUrl}/users`, {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json', 
              },
              body: JSON.stringify(newUser), 
            });
            console.log(response);
            if (response.ok) {
              alert(`${response.status} Registered successfully, dear ${newUser.fullName}`);
              getUserData(newUser.email, newUser.password); 
            } else {
              alert(`Error occurred while sending data: ${response.status}`)
            }
          } catch (error) {
            alert(`Error occurred while sending the data: ${error}`)
          }
    }

    //    S A V E    C H A N G E S
    const saveUserChanges = async (changedData) => {
        try {
            const response = await fetch(`${apiUrl}/users/update/${userId}`, {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json', 
              },
              body: JSON.stringify(changedData), 
            });
            if (response.ok) {
              alert(`${response.status} Changes saved successfully, dear ${changedData.fullName}`);
              getUserData(changedData.email, changedData.password); 
            } else {
              alert(`Error occurred while sending data: ${response.status}`)
            }
          } catch (error) {
            alert(`Error occurred while sending the data: ${error}`)
          }
    }

    //   A D D    W I S H L I S T
    const addProductToWishlist = async (productId) => {
        try {
          const response = await fetch(`${apiUrl}/wishlist?userId=${userId}&productId=${productId}`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json', 
            },
          });
          if (response.ok) {
            getUserData(email, password);
          } else {
            alert(`Error occurred while adding data to wishlist : ${response.status}`)
          }
        } catch (error) {
          alert(`Error occurred while adding data to wishlist : ${error}`)
        }
    };

    //   R E M O V E    W I S H L I S T 
    const removeProductFromWishlist = async (productId) => {
        try {
            const response = await fetch(`${apiUrl}/wishlist?userId=${userId}&productId=${productId}`, {
              method: 'DELETE', 
              headers: {
                'Content-Type': 'application/json', 
              },
            });
            if (response.ok) {
              getUserData(email, password);
            } else {
              alert(`Error occurred while removing data from wishlist : ${response.status}`)
            }
          } catch (error) {
            alert(`Error occurred while removing data from wishlist : ${error}`)
          }
    };

    //   A D D    C A R T
    const addToCart = async (newCartItem) => {
        try {
          const response = await fetch(`${apiUrl}/cart/add-product`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(newCartItem), 
          });
          if (response.ok) {
            getUserData(email, password); 
          } else {
            alert(`Error occurred while sending data: ${response.status}`)
          }
        } catch (error) {
          alert(`Error occurred while sending the data: ${error}`)
        }
    };

    //   R E M O V E    C A R T
    const removeFromCart = async (productId) => {
        try {
          const response = await fetch(`${apiUrl}/cart/remove-product?userId=${userId}&productId=${productId}`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json', 
            },
          });
          if (response.ok) {
            getUserData(email, password);
          } else {
            alert(`Error occurred while adding data to cart : ${response.status}`)
          }
        } catch (error) {
          alert(`Error occurred while adding data to cart : ${error}`)
        }
    };

    return { getUserData, registerUserData, saveUserChanges,
        addProductToWishlist, removeProductFromWishlist,
        addToCart, removeFromCart }
}

export default useUserFetch
