import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Input from '../../../../components/inputs/input';
import './edit.scss'
import Button from '../../../../components/buttons/button';
import useDataFetch from '../../../../features/dataFetch/dataFetch';

const EditCategory = () => {
    const { addCategory, deleteCategory } = useDataFetch({});

  const {categories} = useSelector((state) => state.productsData);

  const [categoryName, setCategorName] = useState("");
  const [categoryPhotoUrl, setCategorPhotoUrl] = useState("");
  const [newCategory, setNewCategory] = useState({})

  const [photoUrlCheck, setPhotoUrlCheck] = useState("")
  const handleAddCategory = (e) => {
    e.preventDefault();
    const regex = /\.(jpg|jpeg|png|gif)$/i;
    if (regex.test(categoryPhotoUrl) && categoryPhotoUrl.startsWith("http") || categoryPhotoUrl.startsWith("www.")) {
        setNewCategory({
            categoryName: categoryName,
            photo: categoryPhotoUrl,
        });
        setCategorName("");
        setCategorPhotoUrl("");
    } else {
        setPhotoUrlCheck("Please enter a valid image URL. example: https://www.example.com/images/sample.jpg");
        setTimeout(() => {
            setPhotoUrlCheck("");
        }, 3000);
    }
  }
  
  useEffect(() => {
    if (Object.keys(newCategory).length !== 0) {
        // console.log(newCategory);         // post data

        addCategory(newCategory);

        setNewCategory({});
    }
  }, [newCategory])


  const handleDelete = (categoryId) => {
    deleteCategory(categoryId);
  }


  return (
    <div className="editCC">
        <h4 className="addCC__heading"> add category</h4>
        <form onSubmit={handleAddCategory} className="addCC">
            <Input name="productName" onChange={(e) => setCategorName(e.target.value)} value={categoryName} placeholder="Name" required/>
            <Input value={categoryPhotoUrl} onChange={(e) => setCategorPhotoUrl(e.target.value)} invalid={photoUrlCheck} name="photoUrl" placeholder="Photo Url"/>
            <Button theme="dark">submit</Button>
        </form>
    
        <h4 className="deleteCC__heading"> delete category</h4>
        <div className="deleteCC">
            { categories &&
                categories.map((i, k) => {
                    return(
                        <div className="deleteCC__item" key={i.id}>
                            <div className="deleteCC__item--photo">
                                <img src={i.photo} alt={i.categoryName} />
                            </div>
                            <p className="deleteCC__item--text">{i.categoryName}</p>
                            <Button onclick={() => handleDelete(i.id)} theme="light"> Delete </Button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default EditCategory