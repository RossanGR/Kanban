import React from "react";
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLayerGroup} from '@fortawesome/free-solid-svg-icons';

// Component
import Todo from "./Todo";

const Todos = ({ task, setTask, statusButton, setStatusButton, inputData, setInputData, handleAddTask, handleDeleteTask, handleChangeStatus, handleChangeStatusDoing, show, handleShow, handleClose, edit, setEdit}) => {
    // CSS AddButton
    const addButon = {
        background: '#007bff',
        color: '#FFF',
        padding: "6px 8px",
        borderRadius: '50%',
        height: '26px',
        width: '63%',
        cursor: 'pointer'
    }
    // Tamanho do Array filtrado
    const tam = task.filter(task => task.status === 1).length;
    // Renderiza Componente de Adicionar Task, se o botão de adicionar for verdadeiro
    const handleStatusTrueButtonAdd = () => {
        setStatusButton(true);
    }
    // Não Renderiza Componente de Adicionar Task, se o botão de adicionar for false
    const handleStatusFalseButtonAdd = () => {
        setStatusButton(false)
    }
    // Captura o que foi digitado dentro do input
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }
    // Faz a chamada da função para adicionar o que foi digitado no input
    const handleTaskEnter = (e) => {
        if (!!inputData && e.key === 'Enter') {
            handleAddTask(inputData);
            setStatusButton(false);
            setInputData('');
        }
    }
    // Pega o ID para poder deletar
    const handleTakeTaskID = (taskID) =>{
        handleDeleteTask(taskID);
    }
     // Pega o ID para poder atulizar o status
     const handleTakeStatusTaskID = (id) =>{
        handleChangeStatus(id);
    }
    // Pega o ID para poder atualizar o status
    const handleTakeStatusTaskIDToDoing = (id) =>{
        handleChangeStatusDoing(id)
    }

    const handleEditTask = () =>{
     
        const editTask = task.findIndex(task => task.id === edit);
        const newTasks = [...task];
        newTasks[editTask] = {...newTasks[editTask], title:inputData};
        setTask(newTasks);
        console.log("EDIT no edit",edit);
        console.log(newTasks)
        setInputData('')
        setEdit(0)
        handleClose()

    }

    // Pega o ID para poder editar
    const handleTakeEditID = (taskID) =>{        
        handleShow();
        const editTask = task.find(task => task.id === taskID);
        const newTasks = [...task];       
        setInputData(editTask.title);
        setEdit(editTask.id);
        console.log(task)
        console.log("EditTask:",editTask)
        console.log("NewTask:",newTasks[editTask])
        console.log("InputData:",inputData)
        console.log('============================')
    }

    


   


    return (
        <div className="Task mb-3">
            <div className="d-flex justify-content-between">
                <div><h2 className="text-center">To Do</h2> <FontAwesomeIcon icon={faLayerGroup} /> {tam}</div>
                <div> <FontAwesomeIcon onClick={handleStatusTrueButtonAdd} style={addButon} icon={faPlus} size="2x" /></div>
            </div>
            <div className="Tasks mt-3 pt-0">
                {statusButton && (
                    <div className="card mb-3 m-auto" >
                        <div className="card-body">
                            <input type="text" className="form-control" placeholder="Write the task..." value={inputData} autoFocus onChange={handleInputChange} onBlur={handleStatusFalseButtonAdd} onKeyPress={handleTaskEnter} />                            
                        </div>
                    </div>
                )}
                {tam ? (
                    task.filter(task => task.status === 1).map(val => 
                    <Todo 
                    key={val.id}
                    val={val} 
                    inputData={inputData}
                    handleInputChange={handleInputChange}
                    handleTakeTaskID={handleTakeTaskID} 
                    handleTakeStatusTaskID={handleTakeStatusTaskID} 
                    handleTakeStatusTaskIDToDoing={handleTakeStatusTaskIDToDoing}
                    handleTakeEditID={handleTakeEditID} 
                    handleEditTask={handleEditTask}
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

export default Todos;