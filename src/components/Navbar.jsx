import React from "react";

const Navbar = ({logo}) =>{
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container justify-content-center">         
            <img src={logo} className="w-4" title="Kanban" alt="Kanban"/>
            <h1>Kanban</h1>
     
        </div>
      </nav>
      <div className="container">

      </div>
    </>
  );
}

export default Navbar;
