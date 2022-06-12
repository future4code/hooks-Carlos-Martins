import axios from "axios";
import React from "react";

function Reset(){

    const onCLickReset = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:guto/clear').then((response)=>{
            console.log(response)
        })
    }
    return(
        <div>
            <button onClick={onCLickReset}>Reset</button>
        </div>
    )
}

export default Reset