import React, { useState } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import ContactList from './contactlist';

import { validateEmail } from '../utils/helper';

export default function Page () {

    const [addnew, setAddNew] = useState(false)

    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ]  = useState('');
    const [ notes, setNotes ]  = useState('');

    const { add } = useIndexedDB('address')

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
        event.preventDefault();
        const regex = /^[0-9]+$/;
        console.log(name, phone, email)

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

        add({ name: name, phone: phone, email: email, note: notes}).then(
            event => {
                console.log("New Contacted Added", event.target.result);
            },
            error => {
                console.log(error);
            }
        );
        setAddNew(false)
        setName('')
        setEmail('')
        setPhone('')
        setNotes('')
    };

    const cancel = () => {
        setAddNew(false)
        setName('')
        setEmail('')
        setPhone('')
        setNotes('')
    }

    return(
        <div>
        <h1>Address Book</h1>
        {addnew ?
        <div>
            <input 
            placeholder='name'
            value={name}
            name="name"
            type="text"
            onChange={handleChange}
            />

            <input 
            placeholder='phone'
            value={phone}
            name="phone"
            type="text"
            onChange={handleChange}
            />

            <input 
            placeholder='email'
            value={email}
            name="email"
            type="text"
            onChange={handleChange}
            />

            <textarea
            placeholder='Add a note not required'
            value={notes}
            name="notes"
            type="text"
            onChange={handleChange}
            />

            <button onClick={submit}>submit</button>
            <button onClick={cancel}>cancel</button>
        </div> 
        : <button onClick={() => setAddNew(true)}>Add New</button>}
        <ContactList />
        </div>
    )
}