import React, {useState} from "react";
import Details from "./Details"
import Filter from "./Filter"

function HogTile ({image, name, specialty, weight, color, greased, highestMedal}) {
   const [showDetails, setShowDetails] = useState(false)

    function handleShowDetails(){
        setShowDetails(showDetails => !showDetails)
    }

    return (
        <>
        <div class="hogtile" onClick={handleShowDetails}>
            <img src={image} alt={name}></img>
            <h1>{name}</h1>
           {showDetails ? <Details
            specialty={specialty}
            weight={weight} 
            color={color} 
            greased={greased}
            highestMedal={highestMedal}
            /> : null}
        </div>    
       
        </>
    )
}

export default HogTile