import React from "react"

function Details ({specialty, weight, color, greased, highestMedal}) {

    return(
        <>
            <div>specialty: {specialty}</div>
            <div>weight: {weight}</div>
            <div>color: {color}</div>
            <div>greased: {greased}</div>
            <div>highestMedal: {highestMedal}</div>
        </>
    )
}

export default Details