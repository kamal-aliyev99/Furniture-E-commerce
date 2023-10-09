import React, { useEffect, useState } from 'react'
import Input from '../inputs/input'
import Button from '../buttons/button'
import './profileChanges.scss'
import { useSelector } from 'react-redux'
import useUserFetch from '../../features/dataFetch/userFetch'

const ProfileChanges = () => {
  const {userData} = useSelector((state) => state.userData);
  const { saveUserChanges } = useUserFetch({});

  const [ changedData, setChangedData ] = useState({});
  const [ name, setName ] = useState(Object.keys(userData).length !== 0 && userData.fullName.split(" ")[0]);
  const [ surname, setSurname ] = useState(Object.keys(userData).length !== 0 && userData.fullName.split(" ")[1]);
  const [ email, setEmail ] = useState(Object.keys(userData).length !== 0 && userData.email);
  const [ password, setPassword ] = useState(Object.keys(userData).length !== 0 && userData.password);

  useEffect(() => {
    setName(Object.keys(userData).length !== 0 && userData.fullName.split(" ")[0]);
    setSurname(Object.keys(userData).length !== 0 && userData.fullName.split(" ")[1]);
    setEmail(Object.keys(userData).length !== 0 && userData.email);
    setPassword(Object.keys(userData).length !== 0 && userData.password);
  }, [userData])
  
  const handleSaveChanges = (e) => {
    e.preventDefault();
    setChangedData(
      {
        fullName: [name, surname].join(" "), 
        email: email,
        password: password,
      }
    );

    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    if (Object.keys(changedData).length !== 0) {
      saveUserChanges(changedData);
      setChangedData({});
      console.log(changedData);
    }
  }, [changedData])



  return (
    <form className="profileChanges" onSubmit={handleSaveChanges}>
        <div className="profileChanges__inputs">
            <Input value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Name" required/>
            <Input value={surname} onChange={(e) => setSurname(e.target.value)} name="surname" placeholder="surname" required/>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="e-mail address" required/>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" minLength="8" placeholder="password" required/>
        </div>
        <Button theme="dark">save changes</Button>
    </form>
  )
}

export default ProfileChanges