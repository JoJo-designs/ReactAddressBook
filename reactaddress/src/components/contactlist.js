import React, { useState, useEffect } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import profile from './images/usertag1.png'
import Update from './update';
import '../styles/contact.css'


export default function ContactList () {
    const { getAll, deleteRecord } = useIndexedDB('address')
    const [contacts, setContacts] =useState()
    const [update, setUpdate] = useState()

    useEffect(() => {
        getAll().then(data => {
            setContacts(data)
        });
    }, [contacts]);
    
    const handleUpdate = (id) => {
        console.log(id)
        setUpdate(id)
    }

    const handleDelete= (id) => {
       const remove = window.confirm('Are you sure you want to delete this item')
       if (remove === true) {
           console.log("user want to delete item " + id)
           deleteRecord(id).then(event => {
               alert('item has been deleted!')
           })
       } else {
           console.log("user doesn't want to delete")
       }
    }

    const closeWindow = () => {
        setUpdate('')
    }

    return(
        <div>
            {contacts ? 
           <div>
              {contacts.map((data) => (
                  <div key={data.id}>
                      <img src={profile} alt="basic profile image"></img>
                      <h1>{data.name}</h1>
                      <h3>{data.phone}</h3>
                      <h3>{data.email}</h3>
                      <button onClick={() => handleUpdate(data.id)}>Update</button>
                      <button onClick={() => handleDelete(data.id)}>Delete</button>
                      {update === data.id ? 
                      <Update update={update} onChange={closeWindow} data={data} /> : null}
                  </div>
                  
              ))}
           </div> :
           <p>no data yet</p> }
        </div>
    )
}