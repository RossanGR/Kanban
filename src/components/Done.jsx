import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Done = ({ val }) => {
  
    return (
        <div className="card mb-3 m-auto" >
            <div className="card-body">
                <h5 className="card-title">{val.title}</h5>
                <p className="card-text"></p>
                <div className="d-grid gap-2 d-md-flex ">
                    <FontAwesomeIcon icon={faCircleCheck} style={{color: '#198754'}} size="2x" />
                   
                </div>
            </div>
        </div>
    )
}

export default Done;