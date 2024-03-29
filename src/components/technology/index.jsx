import { Fragment, useState } from "react"
import "./style.scss"
import Image from "../LazyLoadImage"
import { technology } from "../../tech-data"
const Tech = () => {
	const [active, setActive] = useState(0)
	return (
		<div className='tech-container'>
			<div className='space-launch'>
				<span>03</span> SPACE LAUNCH 101
			</div>
			<div className='tech-content'>
				{technology?.map((item, idx) => {
					return (
						<Fragment key={idx}>
							<div className={active === idx ? "left" : "left hidden"}>
								<div className='slider-tech'>
									{technology.map((_, idx) => {
										return (
											<button
												key={idx}
												onClick={() => setActive(idx)}
												className={
													active === idx
														? "slider-bubble"
														: "slider-bubble inactive"
												}
											>
												{idx + 1}
											</button>
										)
									})}
								</div>
								<div
									className={active === idx ? "tech-text" : "tech-text hidden"}
								>
									<h3>THE TERMINOLOGY…</h3>
									<h2>{item.name}</h2>
									<p>{item.description}</p>
								</div>
							</div>
							<div className={active === idx ? "right" : "right hidden"}>
								<Image src={item.images.portrait} className='image-tech' />
							</div>
						</Fragment>
					)
				})}
			</div>
		</div>
	)
}

export default Tech
