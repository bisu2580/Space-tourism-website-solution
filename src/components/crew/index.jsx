import { useState } from "react"
import "./style.scss"
import data from "../../data.json"
const Crew = () => {
	const [active, setActive] = useState(0)
	const { crew } = data
	return (
		<div className='crew-container'>
			<div className='meet-crew'>
				<span>02</span> MEET YOUR CREW
			</div>
			<div className='crew-content'>
				{crew?.map((item, idx) => {
					return (
						<>
							<div
								className={active === idx ? "crew-left" : "crew-left hidden"}
								key={idx}
							>
								<h4>{item.role}</h4>
								<h2>{item.name}</h2>
								<p>{item.bio}</p>
								<span className='slider'>
									{crew.map((_, idx) => {
										return (
											<button
												key={idx}
												onClick={() => setActive(idx)}
												className={active === idx ? "box" : "box box-inactive"}
											></button>
										)
									})}
								</span>
							</div>
							<div
								className={active === idx ? "crew-right" : "crew-right hidden"}
							>
								<div className='image'>
									<img src={item.images.png} alt='' />
								</div>
							</div>
						</>
					)
				})}
			</div>
		</div>
	)
}

export default Crew
