import React, { useState } from "react";

export default function Searchbar (props) {

    const [search, setSearch] = useState('')

    const handleChange = (event) => {
        const {target} = event;
        const inputValue = target.value

        setSearch(inputValue)
        props.onChange(inputValue)
    }

   return (
       <div>
          <input 
            placeholder="Search"
            value={search}
            name="search"
            type="text"
            onChange={handleChange}
          /> 
           
        </div>
   )
}