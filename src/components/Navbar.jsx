import React from "react";

const Navbar = ({logo}) =>{
  return (
    <>
      <nav className="navbar navbar-light bg-light">
            {/* <img src={logo} className="w-4"/> */}
        <div className="container justify-content-center">         
            <h1>Kanban</h1>
     
        </div>
      </nav>
      <div className="container">

      </div>
    </>
  );
}

export default Navbar;
