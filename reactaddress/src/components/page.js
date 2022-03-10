import React, { useState } from 'react';

export default function Page () {

    const [addnew, setAddNew] = useState(false)
    
    const [newData, setNewData] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const handleChange = (event) => {
        const {target} = event;
        const inputType = target.name;
        const inputValue = target.value;
        console.log(inputType, inputValue)
    }

    return(
        <div>
        <h1>Address Book</h1>
        {addnew ?
        <div>
            <input placeholder='name'
            value={newData.name}
            name="name"
            type="text"
            onChange={handleChange}
            />

            <input placeholder='phone'/>

            <input placeholder='email'/>

            <button onClick={() => setAddNew(false)}>submit</button>
        </div> 
        : <button onClick={() => setAddNew(true)}>Add New</button>}
        </div>
    )
}