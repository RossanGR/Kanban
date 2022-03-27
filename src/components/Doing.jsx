import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap';

const Doing = ({ val,  handleTakeTaskID, handleTakeStatusTaskID, handleDoingTakeEditID, show, handleClose, inputData, handleInputChange, handleDoingEditTask  }) => {
    return (
        <div className="card mb-3 m-auto" >
            <div className="card-body">
                <h5 className="card-title">{val.title}</h5>
                <p className="card-text"></p>
                <div className="gap-2 d-flex justify-content-start">
                    <button className="btn btn-danger" onClick={()=>handleTakeTaskID(val.id)} type="button"><FontAwesomeIcon icon={faTrashCan} size="1x" /></button>
                    {/* <FontAwesomeIcon icon={faGear} size="1x" /> */}
                    
                    <button className="btn btn-success" onClick={()=>handleTakeStatusTaskID(val.id)} type="button"><FontAwesomeIcon icon={faCircleCheck} size="1x" /></button>
                </div>
            </div>
        </div>
    )
}

export default Doing;