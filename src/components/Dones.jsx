import React from "react";
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

// Component
import Done from "./Done";

const Dones = ({ task }) => {
    const cursor = {
        opacity: 0.7,
        cursor: "no-drop"
    }
    const tam = task.filter(task => task.status === 3).length;

    return (
        <div className="Task " style={cursor}>
            <div className="d-flex justify-content-between">
                <div><h2 className="text-center">Done</h2> <FontAwesomeIcon icon={faLayerGroup} /> {tam}</div>
                <div> </div>
            </div>
            <div className="Tasks mt-3 ">
                {tam ? (
                    task.filter(task => task.status === 3).map(val => <Done key={val.id} val={val} />)
                )
                    :
                    (<div>Não há resultados para esse filtro</div>)
                }
            </div>
        </div>
    )
}

export default Dones;