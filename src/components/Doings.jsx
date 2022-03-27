import React from "react";
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

// Component
import Doing from "./Doing";

const Doings = ({ task, setTask, handleAddTask,handleDeleteTask, statusButtonEdit, setStatusButtonEdit, inputDataDoing ,setInputDataDoing, handleChangeStatus, show, handleShow, handleClose, edit, setEdit}) => {
    const addButon = {
        background: 'purple',
        color: '#FFF',
        padding: "6px 8px",
        borderRadius: '50%',
        height: '26px',
        width: '63%'
    }
    const tam = task.filter(task => task.status === 2).length;
    // Renderiza Componente de Adicionar Task, se o botão de adicionar for verdadeiro
    const handleStatusTrueButtonAdd = () => {
        setStatusButtonEdit(true);
    }
    // Não Renderiza Componente de Adicionar Task, se o botão de adicionar for false
    const handleStatusFalseButtonAdd = () => {
        setStatusButtonEdit(false)
    }
    // Captura o que foi digitado dentro do input
    const handleInputChange = (e) => {
        setInputDataDoing(e.target.value);
    }
    // Faz a chamada da função para adicionar o que foi digitado no input
    const handleTaskEnter = (e) => {
        if (!!inputDataDoing && e.key === 'Enter') {
            handleAddTask(inputDataDoing);
            setStatusButtonEdit(false)
            setInputDataDoing('');
        }
    }
     // Pega o ID para poder deletar
     const handleTakeTaskID = (taskID) =>{
        handleDeleteTask(taskID);
    }
    // Pega o ID para poder atulizar o status
    const handleTakeStatusTaskID = (taskID) =>{
        handleChangeStatus(taskID);
    }

    // Edita a task selecionada
    const handleDoingEditTask = () =>{
        const editTaskDoing = task.find(task => task.id === edit);
        const newTasksDoing = [...task];
        newTasksDoing[editTaskDoing] = {...newTasksDoing[editTaskDoing], title:inputDataDoing};
        setTask(newTasksDoing);
        console.log("EDIT no edit",edit);
        console.log(newTasksDoing)
        setInputDataDoing('')
        handleClose()
    }

    // Pega o ID para poder editar
    const handleDoingTakeEditID = (IDtask) =>{        
        handleShow();
        const editTaskDoing = task.find(task => task.id === IDtask);   
        setInputDataDoing(editTaskDoing.title);
        setEdit(editTaskDoing.id);
        
    }
    return (
        <div className="Task mb-3">
            <div className="d-flex justify-content-between">
                <div><h2 className="text-center">Doing</h2> <FontAwesomeIcon icon={faLayerGroup} /> {tam}</div>
                
            </div>
            
            <div className="Tasks mt-3 pt-0">
                {tam ? (
                    task.filter(task => task.status === 2).map(val => 
                    <Doing 
                    key={val.id} 
                    val={val} 
                    handleTakeTaskID={handleTakeTaskID} 
                    handleTakeStatusTaskID={handleTakeStatusTaskID}
                    handleDoingTakeEditID={handleDoingTakeEditID} 
                    handleDoingEditTask={handleDoingEditTask}
                    show={show} 
                    handleShow={handleShow} 
                    handleClose={handleClose}/>
                    )
                )
                    :                
                    (<div>Não há resultados para esse filtro</div>)
                }
            </div>
        </div>
    )
}

export default Doings;