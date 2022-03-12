import React, { useState, useEffect } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import profile from './images/usertag1.png'
import '../styles/contact.css'


export default function ContactList () {
    const { getAll } = useIndexedDB('address')
    const [contacts, setContacts] =useState()

    useEffect(() => {
        getAll().then(data => {
            setContacts(data)
        });
    }, [contacts]);
    

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
                  </div>
              ))}
           </div> :
           <p>no data yet</p> }
        </div>
    )
}