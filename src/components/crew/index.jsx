import { Fragment, useState } from "react"
import "./style.scss"
import { crew } from "../../crew-data"
const Crew = () => {
	const [active, setActive] = useState(0)
	return (
		<div className='crew-container'>
			<div className='meet-crew'>
				<span>02</span> MEET YOUR CREW
			</div>
			<div className='crew-content'>
				{crew?.map((item, idx) => {
					return (
						<Fragment key={idx}>
							<div
								className={active === idx ? "crew-left" : "crew-left hidden"}
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
									<img src={item.images} alt='' />
								</div>
							</div>
						</Fragment>
					)
				})}
			</div>
		</div>
	)
}

export default Crew
