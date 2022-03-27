import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faTrashCan, faCircleCheck, faClock } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap';

const Todos = ({ val, handleTakeTaskID, handleTakeStatusTaskID, handleTakeStatusTaskIDToDoing, handleTakeEditID, show,handleClose, inputData, handleInputChange, handleEditTask }) => {
   
    return (
        <div className="card mb-3 m-auto" >
            <div className="card-body">
                <h5 className="card-title">{val.title}</h5>
                <p className="card-text"></p>
                <div className="gap-2 d-flex justify-content-start">
                    <button className="btn btn-danger" onClick={() => handleTakeTaskID(val.id)} type="button" title="Delete"><FontAwesomeIcon icon={faTrashCan} size="1x" /></button>
                    <button className="btn btn-secondary" onClick={()=>handleTakeEditID(val.id)} type="button" title="Edit"><FontAwesomeIcon icon={faGear} size="1x" /></button>
                    <Modal show={show} >
                        <Modal.Header closeButton onClick={handleClose}>
                            <Modal.Title>Edit Task</Modal.Title>
                            
                        </Modal.Header>
                        <Modal.Body>
                            <label>Title:</label>
                            <input type="text" className="form-control" value={inputData} onChange={handleInputChange} placeholder="Edit the task"/>

                        </Modal.Body>
                        <Modal.Footer>                            
                            <Button variant="success" onClick={()=>handleEditTask()}>
                                Edit
                            </Button>
                            <Button variant="danger" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <button className="btn btn-purple" onClick={() => handleTakeStatusTaskIDToDoing(val.id)} type="button" title="Done"><FontAwesomeIcon icon={faClock} size="1x" /></button>
                    <button className="btn btn-success" onClick={() => handleTakeStatusTaskID(val.id)} type="button" title="Done"><FontAwesomeIcon icon={faCircleCheck} size="1x" /></button>
                </div>
            </div>
        </div>
    )
}

export default Todos;