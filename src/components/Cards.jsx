import React,{useState} from "react";

// ID Generator
import {v4 as uuidv4} from 'uuid';

// Components
import Todos from "./Todos";
import Doings from "./Doings";
import Dones from "./Dones";


const Cards = () => {

    const [task,setTask] = useState([
        {
            id : 1,
            title : 'Primeira Tarefa',
            status : 1
        },
        {
            id : 2,
            title : 'Segunda Tarefa',
            status : 2
        },
        {
            id : 3,
            title : 'Terceira Tarefa',
            status : 3
        }
        ,
        {
            id : 4,
            title : 'Quarta Tarefa',
            status : 3
        }
        ,
        {
            id : 5,
            title : 'Quinta Tarefa',
            status : 3
        }
        ,
        {
            id : 6,
            title : 'Sexta Tarefa',
            status : 1
        }
    ]);

    const [statusButton, setStatusButton] = useState(false);
    const [statusButtonEdit, setStatusButtonEdit] = useState(false);
    const [inputData, setInputData] = useState('');
    const [inputDataDoing, setInputDataDoing] = useState('');
    const [edit, setEdit] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddTask = (taskTitle) => { 
        if(statusButton){

            const newTasks = [...task,{
                id: uuidv4(),
                title: taskTitle,
                status: 1 
            }]
            setTask(newTasks);
        }
        else if(statusButtonEdit){

            const newTasksEdit = [...task,{
                id: uuidv4(),
                title: taskTitle,
                status: 2 
            }]
            setTask(newTasksEdit);
        }
        console.log("To do:",statusButton);
        console.log("Doing",statusButtonEdit);
    }

    const handleDeleteTask = (taskID) =>{
        const newTasks = task.filter(task => task.id !== taskID);
        setTask(newTasks);
        // console.log(newTasks);
    }

    const handleChangeStatus = (id) =>{
        const statusChange = task.findIndex(task => task.id === id);
        const newTasks = [...task];
        newTasks[statusChange] = {...newTasks[statusChange], status:3};
        setTask(newTasks);
    }

    const handleChangeStatusDoing = (id) =>{
        const status = task.findIndex(task => task.id === id);
        const newTasks = [...task];
        newTasks[status] = {...newTasks[status], status:2};
        setTask(newTasks)
       
    }



    return (
        <div className="container">
            <div className="row pt-5">
                <div className="col-sm-12 col-md-4">
                    <Todos 
                    task={task} 
                    setTask={setTask} 
                    statusButton = {statusButton} 
                    setStatusButton={setStatusButton} 
                    inputData={inputData} 
                    setInputData={setInputData} 
                    handleAddTask={handleAddTask} 
                    handleDeleteTask={handleDeleteTask} 
                    handleChangeStatus={handleChangeStatus} 
                    handleChangeStatusDoing={handleChangeStatusDoing}
                    show={show} 
                    handleShow={handleShow} 
                    handleClose={handleClose} 
                    edit={edit} 
                    setEdit={setEdit}/>
                </div>
                <div className="col-sm-12 col-md-4">
                    <Doings 
                    task={task}
                    setTask={setTask} 
                    statusButtonEdit={statusButtonEdit} 
                    setStatusButtonEdit={setStatusButtonEdit} 
                    handleDeleteTask={handleDeleteTask} 
                    inputDataDoing={inputDataDoing} 
                    setInputDataDoing={setInputDataDoing} 
                    handleAddTask={handleAddTask} 
                    handleChangeStatus={handleChangeStatus}
                    show={show} 
                    handleShow={handleShow} 
                    handleClose={handleClose} 
                    edit={edit} 
                    setEdit={setEdit} 
                    />
                </div>
                <div className="col-sm-12 col-md-4">
                    <Dones task={task}/>
                </div>
            </div>
        </div>
    )
}

export default Cards