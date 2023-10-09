import React, { useEffect, useState } from 'react'
import Input from '../../../../components/inputs/input'
import Button from '../../../../components/buttons/button'
import './addProduct.scss'
import { useDispatch, useSelector } from 'react-redux'
import useDataFetch from '../../../../features/dataFetch/dataFetch'
import { setProductsData } from '../../../../features/products/productsSlice'

const AddProduct = () => {
    const { addProduct } = useDataFetch({});

  const [newProduct, setNewProduct] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    setNewProduct(
        {
            name: name,
            description: description,
            color: color,
            price: price,
            popularity:popularity,
            stock: stock,
            categoryId: category,
            collectionId: collection,
            photoUrls: addPhotos,
        }
    );
    setName("");
    setDescription("");
    setColor("");
    setPrice("");
    setPopularity("");
    setStock("");
    setCategory("");
    setCollection("");
    setAddPhoto("");
    setAddPhotos([]);
  }
  useEffect(() => {
    if (Object.keys(newProduct).length !== 0) {
        addProduct(newProduct);
        setNewProduct({});
    }
  }, [newProduct])


  const {products, categories, collections} = useSelector((state) => state.productsData);
  console.log(products);

  const [name, setName] =useState("")
  const [description, setDescription] =useState("")
  const [color, setColor] = useState("")
  const [price, setPrice] = useState("")
  const [popularity, setPopularity] = useState("")
  const [stock, setStock] = useState("")
  const [category, setCategory] =useState("")
  const [collection, setCollection] =useState("")
  const [addPhoto, setAddPhoto] = useState("")
  const [addPhotos, setAddPhotos] = useState([])
  const [photoUrlCheck, setPhotoUrlCheck] = useState("")

  const handleAddPhotos = () => {
    const regex = /\.(jpg|jpeg|webp|png|gif)$/i;
    if (regex.test(addPhoto) && addPhoto.startsWith("http") || addPhoto.startsWith("www.")) {
        setAddPhotos([...addPhotos, addPhoto]);
        setAddPhoto('');
    } else {
        setPhotoUrlCheck("Please enter a valid image URL. example: https://www.example.com/images/sample.jpg");
        setTimeout(() => {
            setPhotoUrlCheck("");
        }, 3000);
    }
  }
  const handleRemovePhotos = (key) => {
    setAddPhotos(() => addPhotos.filter((i,k) => k !== key))
  }

  return (
    <div className="addProduct">
        <h4 className="addProduct__heading">Add product</h4>
        <form className="addProduct__items" onSubmit={handleSubmit}>
            <Input name="productName" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" required/>
            <div className="input">
                <textarea name='productDescription' onChange={(e) => setDescription(e.target.value)} value={description} cols="30" rows="10" className="div__input" placeholder='Description' required></textarea>
            </div>
            <Input name="productColor" placeholder="Colors" required value={color} onChange={(e) => setColor(e.target.value)}/>
            <div className="input">
                <input name='productPrice' type="number" value={price ? price : ""} onChange={(e) => !isNaN(e.target.value) && setPrice(Number(e.target.value))} className="div__input" min="0" step={0.01} placeholder='price' required/>
            </div>
            <div className="addProductPhoto">
                <Input value={addPhoto} onChange={(e) => setAddPhoto(e.target.value)} invalid={photoUrlCheck} name="photoUrl" placeholder="Photo Url"/>
                { addPhotos &&
                    addPhotos.map((urls, key) => {
                        return(
                            <div className="addPhotoUrls" key={key}>
                                <span onClick={() => handleRemovePhotos(key)}> &#10006; </span>
                                <p>{urls}</p>
                            </div>
                        )
                    })
                }
                <Button type="button" theme="light" onclick={handleAddPhotos}> + add photo</Button>
            </div>
            <div className="input">
                <input name='productPopularity' type="number" value={popularity ? popularity : ""} onChange={(e) => !isNaN(e.target.value) && setPopularity(Number(e.target.value))} className="div__input" min="0" max="10" step="0.1" placeholder='popularity' required/>
            </div>
            <div className="input">
                <input name='productStock' type="number" value={stock ? stock : ""} onChange={(e) => !isNaN(e.target.value) && setStock(Number(e.target.value))} className="div__input" min="0" step="1" placeholder='stock' required/>
            </div>
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value="" disabled> Categories </option>
                { categories &&
                    categories.map((category) => {
                        return(
                            <option value={category.id} key={category.id}>{category.categoryName}</option>
                        )
                    })
                }
            </select>

            <select value={collection} onChange={(e) => setCollection(e.target.value)} required>
            <option value="" disabled> Colections </option>
                { collections &&
                    collections.map((collection) => {
                        return(
                            <option value={collection.id} key={collection.id}>{collection.collectionName}</option>
                        )
                    })
                }
            </select>
            <Button theme="dark">submit</Button>
        </form>
    </div>
  )
}

export default AddProduct