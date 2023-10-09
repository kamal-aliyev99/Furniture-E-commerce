// {
//     id: 0,
//     name: "",
//     description: "",
//     colors: [],
//     price: 0,
//     photos: [],
//     category: "",
//     collection: "",
//     popularity: 0,
//     stock: 0,
// },


  // {
  //   id: 0,
  //   fullName: "",
  //   email: "",
  //   password: "",
  //   wishList: [{
  //     id: "",
  //     productId:"",
  //   }],
  //   cart: {
  //     id: "",
  //     product{
  //       productId: "",
  //       color: "",
  //       pieces: "",
  //     }

  //   }
  // }


// // state.products = action.payload.products;
//       // console.log(state.products);
//       // console.log(action.payload.products);

      // const apiUrl = 'https://api.npoint.io/3eb2ea125e156dd87e4b';
      // const [products, setProducts] = useState({});


      // useEffect(() => {
      //   async function getUsers() {
      //     try {
      //       const response = await fetch(apiUrl);
      //     if (!response.ok) {
      //         throw new Error('API request failed.');
      //     }
      //     const data = await response.json();
      //     return data;

      //     } catch (error) {
      //       console.error('ERROR:', error);
      //     return [];
      //     }
      //   }
      //   const data = getUsers();
      //   data.then(res => setProducts(res));
      //   }, [])

      //   if (Object.keys(products).length !== 0){
      //     // console.log(products.products);
      //     state.products = products.products;
      //     console.log(state.products.products);  
      //   }





  // T E S T

  // const newData = {
  //   name: 'Yeni Ürün',
  //   price: 10.99,
  // };
  
  // Veriyi API'ye POST etmek için bir fonksiyon
  // async function postData(newData) {
  //   try {
  //     const response = await fetch(apiUrl, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ test: newData}),
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('API request failed.');
  //     }
  
  //     const data = await response.json();
  //     console.log('Başarılı:', data);
  //   } catch (error) {
  //     console.error('Hata:', error);
  //   }
  // }

  // postData(newData);
  // console.log(products);