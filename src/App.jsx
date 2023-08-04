import "./App.css"
import Home from "./components/home"
import Destination from "./components/destination"
import Crew from "./components/crew"
import Tech from "./components/technology"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from "./components/navigationbar"
function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route exact path='/' Component={Home} />
				<Route path='/destination' Component={Destination} />
				<Route path='/crew' Component={Crew} />
				<Route path='/tech' Component={Tech} />
			</Routes>
		</Router>
	)
}

export default App
