import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Content from "./content.jsx";
import Cards from "./card.jsx";

//create your first component

const Home = () => {
	return <div>
		<Navbar />
		<Header />
		<Content>
			<Cards />
		</Content>
		<Footer />
	</div>
};



export default Home;
