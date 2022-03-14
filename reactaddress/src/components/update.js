import React, { useState, useEffect } from 'react';
import { validateEmail } from '../utils/helper';
import { useIndexedDB } from 'react-indexed-db';


export default function Update (data) {
    const { update } = useIndexedDB('address')
    
    useEffect(() => {
        console.log(data)
        const string = data.data.note
        console.log(string)
        setName(data.data.name)
        setPhone(data.data.phone)
        setEmail(data.data.email)
        setNotes(data.data.note)
        
      }, []);

    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ]  = useState('');
    const [ notes, setNotes ]  = useState('');

    const handleChange = (event) => {
        const {target} = event;
        const inputType = target.name;
        const inputValue = target.value;
        console.log(inputType, inputValue)

        if (inputType === 'name') {
            setName(inputValue)
        } else if (inputType === 'phone') {
            setPhone(inputValue)
        } else if (inputType === 'email'){
            setEmail(inputValue)
        } else {
            setNotes(inputValue)
        }
    }

    const submit = (event) => {
        console.log("function fires")
        event.preventDefault();
        const regex = /^[0-9]+$/;
        console.log(name, phone, email, notes)

        if(name.length === 0) {
            alert("No name was entered")
            return;
        }
        if(!phone.match(regex)) {
            alert("phone Number is not a number")
            return;
        }
        if(!validateEmail(email)) {
            alert("Email is invaild")
            return;
        }
        // update({id: id, })
    }
    

    return (
        <div>
               <input 
            placeholder="name"
            value={name}
            name="name"
            type="text"
            onChange={handleChange}
            />

            <input 
            placeholder="phone"
            value={phone}
            name="phone"
            type="text"
            onChange={handleChange}
            />

            <input 
            placeholder="email"
            value={email}
            name="email"
            type="text"
            onChange={handleChange}
            />

            <textarea
            placeholder="notes are not required"
            value={notes}
            name="notes"
            type="text"
            onChange={handleChange}
            />
            <button onClick={submit}>Submit</button>
        </div>
    )
}