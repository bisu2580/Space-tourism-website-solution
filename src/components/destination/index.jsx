import "./style.scss"
import { destinations } from "../../destination-data"
import { Fragment, useState } from "react"
import { useEffect } from "react"
const Destination = () => {
	const [name, setName] = useState("Moon")
	const [component, setComponent] = useState([])
	useEffect(() => {
		setComponent(destinations.filter((namefilter) => namefilter.name === name))
	}, [name])

	return (
		<div className='destination-container'>
			<div className='pick-destination'>
				<span>01</span> PICK YOUR DESTINATION
			</div>
			<div className='destination-content'>
				{component.map((item, idx) => (
					<Fragment key={idx}>
						<div className='left-portion'>
							<img src={item.images} alt='not found' />
						</div>
						<div className='right-portion'>
							<nav className='dest-nav'>
								<Navigationbar navName='Moon' handleSetName={setName} />
								<Navigationbar navName='Mars' handleSetName={setName} />
								<Navigationbar navName='Europa' handleSetName={setName} />
								<Navigationbar navName='Titan' handleSetName={setName} />
							</nav>
							<h1>{item.name}</h1>
							<p>{item.description}</p>
							<hr />
							<div className='distance-time'>
								<div className='distance'>
									<p>AVG.DISTANCE</p>
									<h3>{item.distance}</h3>
								</div>
								<div className='time'>
									<p>EST.TRAVEL TIME</p>
									<h3>{item.travel}</h3>
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
