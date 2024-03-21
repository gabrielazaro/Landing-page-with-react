import React from "react";

const Navbar = () => {
    return (
		<div className="container-fluid justify-content-center">
			<div className="header"> 
			<nav className="navbar navbar-dark navbar-expand-lg bg-warning">
  			<div className="container-fluid justify-content-center">
				<a className="navbar-brand" href="#" >
				<img src="https://pbs.twimg.com/profile_images/1683801179027800066/9bKXpuwR_400x400.jpg" alt="Logo de Just Eat" width="30" height="30" className="d-inline-block align-text-top" />
					Just Eat</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      		<div className="navbar-nav ms-auto justify-content-end">
        	<a className="nav-link active" aria-current="page" href="#">Pedidos</a>
        	<a className="nav-link" href="#">Acerca de Nosotros</a>
        	<a className="nav-link" href="#">Contacto</a>
      		</div>
    		</div>
  			</div>
			</nav>
			</div>
		</div>
	);
};

export default Navbar;