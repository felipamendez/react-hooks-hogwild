import React from "react"
import hogs from "../porkers_data"

    function Filter ({setShowGreased, showGreased, sortBy, setSortBy}) {
        


        function handleChangeFilter(event) {
            setShowGreased(event.target.checked)
            }
        
        function handleChangeSort(event) {
            setSortBy(event.target.value)
        }
            
        

        return (
            <> 
                 <input type="checkbox" name="greased" onChange={handleChangeFilter} checked={showGreased}/>
                 <label for="greased">Greased</label>
                 <label for="sort">Sort By Name and Weight</label>
                 <select name="sort" onChange={handleChangeSort} value={sortBy}>
                     <option>Name</option>
                     <option>Weight</option>
                 </select>
                 
                
            </>
        )

    }


export default Filter