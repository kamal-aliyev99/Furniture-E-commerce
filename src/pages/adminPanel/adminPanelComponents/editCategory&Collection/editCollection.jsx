import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Input from '../../../../components/inputs/input';
import './edit.scss'
import Button from '../../../../components/buttons/button';
import useDataFetch from '../../../../features/dataFetch/dataFetch';

const EditCollection = () => {
    const { addCollection, deleteCollection } = useDataFetch({});

  const {collections} = useSelector((state) => state.productsData);

  const [collectionName, setCollectionName] = useState("");
  const [collectionPhotoUrl, setCollectionPhotoUrl] = useState("");
  const [newCollection, setNewCollection] = useState({})

  const [photoUrlCheck, setPhotoUrlCheck] = useState("");
  const handleAddCollection = (e) => {
    e.preventDefault();
    const regex = /\.(jpg|jpeg|png|gif)$/i;
    if (regex.test(collectionPhotoUrl) && collectionPhotoUrl.startsWith("http") || collectionPhotoUrl.startsWith("www.")) {
        setNewCollection({
            collectionName: collectionName,
            photo: collectionPhotoUrl,
        });
        setCollectionName("");
        setCollectionPhotoUrl("");
    } else {
        setPhotoUrlCheck("Please enter a valid image URL. example: https://www.example.com/images/sample.jpg");
        setTimeout(() => {
            setPhotoUrlCheck("");
        }, 3000);
    }
  }
  
  useEffect(() => {
    if (Object.keys(newCollection).length !== 0) {
        console.log(newCollection);         // post data

        addCollection(newCollection);

        setNewCollection({});
    }
  }, [newCollection])


  const handleDelete = (collectionId) => {
    console.log(collectionId);
    deleteCollection(collectionId);
  }


  return (
    <div className="editCC">
        <h4 className="addCC__heading"> add collection</h4>
        <form onSubmit={handleAddCollection} className="addCC">
            <Input name="productName" onChange={(e) => setCollectionName(e.target.value)} value={collectionName} placeholder="Name" required/>
            <Input value={collectionPhotoUrl} onChange={(e) => setCollectionPhotoUrl(e.target.value)} invalid={photoUrlCheck} name="photoUrl" placeholder="Photo Url"/>
            <Button theme="dark">submit</Button>
        </form>
    
        <h4 className="deleteCC__heading"> delete collection</h4>
        <div className="deleteCC">
            { collections &&
                collections.map((i, k) => {
                    return(
                        <div className="deleteCC__item" key={k}>
                            <div className="deleteCC__item--photo">
                                <img src={i.photo} alt={i.collectionName} />
                            </div>
                            <p className="deleteCC__item--text">{i.collectionName}</p>
                            <Button onclick={() => handleDelete(i.id)} theme="light"> Delete </Button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default EditCollection