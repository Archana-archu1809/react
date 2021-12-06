import React from "react";
const Card=(props)=>{
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <h6 className="card subtitle mb-2 text muted">{props.data.company.name}</h6>
                <p className="card-text">{props.data.company.catchPhrase}</p>
            </div>
        </div>
    )
}
export default Card