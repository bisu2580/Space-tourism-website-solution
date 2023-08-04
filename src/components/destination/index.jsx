import "./style.scss"
import data from "../../data.json"
import { Fragment, useState } from "react"
import { useEffect } from "react"
const Destination = () => {
	const [name, setName] = useState("Moon")
	const [component, setComponent] = useState([])
	const { destinations } = data

	useEffect(() => {
		setComponent(destinations.filter((namefilter) => namefilter.name === name))
	}, [name])

	return (
		<div className='destination-container'>
			<div className='pick-destination'>
				<span>01</span> PICK YOUR DESTINATION
			</div>
			<div className='destination-content'>
				{component.map((destinations, idx) => (
					<Fragment key={idx}>
						<div className='left-portion'>
							<img src={destinations.images.png} alt='image' />
						</div>
						<div className='right-portion'>
							<nav className='dest-nav'>
								<Navigationbar navName='Moon' handleSetName={setName} />
								<Navigationbar navName='Mars' handleSetName={setName} />
								<Navigationbar navName='Europa' handleSetName={setName} />
								<Navigationbar navName='Titan' handleSetName={setName} />
							</nav>
							<h1>{destinations.name}</h1>
							<p>{destinations.description}</p>
							<hr />
							<div className='distance-time'>
								<div className='distance'>
									<p>AVG.DISTANCE</p>
									<h3>{destinations.distance}</h3>
								</div>
								<div className='time'>
									<p>EST.TRAVEL TIME</p>
									<h3>{destinations.travel}</h3>
								</div>
							</div>
						</div>
					</Fragment>
				))}
			</div>
		</div>
	)
}

const Navigationbar = ({ navName, handleSetName }) => {
	return (
		<ul className='dest-list' onClick={() => handleSetName(navName)}>
			<li>{navName}</li>
		</ul>
	)
}

export default Destination
