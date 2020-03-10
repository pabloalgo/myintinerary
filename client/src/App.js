import React from "react";
import MytIneraryLogo from "./img/MYtineraryLogo.png";
import Navbar from "./Navbar.js";
import AppBar from "./AppBar.js";
import Carrousel from "./Carrousel.js";
import Landing from "./Landing.js";

function App() {
	return (
		<div className='flexApp'>
			<header>
				<Navbar />
				<AppBar />
			</header>

			<img src={MytIneraryLogo} className='logox' />
			<Landing />
		</div>
	);
}

export default App;
