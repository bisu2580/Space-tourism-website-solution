import "./style.scss"
import { NavLink } from "react-router-dom"
import logo from "../../assets/shared/logo.svg"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"
const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [icon, setIcon] = useState(<RxHamburgerMenu />)
	const toggleNavBar = () => {
		setIsOpen(!isOpen)
		if (!isOpen) {
			setIcon(<AiOutlineClose />)
		} else {
			setIcon(<RxHamburgerMenu />)
		}
	}
	return (
		<div className='nav-wrapper'>
			<div className='nav-content'>
				<img src={logo} alt={"logo"} />
				<div className='middle-rectangle'></div>
				<div className='navbar-toggle' onClick={toggleNavBar}>
					{icon}
				</div>
				<nav className={`main-nav ${isOpen ? "active" : ""}`}>
					<ul className='nav-list'>
						<li className='nav-text'>
							<div className='text-grp'>
								<NavLink to={"/"}>
									<a>
										<strong className='number'>00</strong> HOME
									</a>
									<span className='bottom-div'></span>
								</NavLink>
							</div>
						</li>
						<li className='nav-text'>
							<div className='text-grp'>
								<NavLink to={"/destination"}>
									<a>
										<strong className='number'>01</strong> DESTINATION
									</a>
									<span className='bottom-div'></span>
								</NavLink>
							</div>
						</li>
						<li className='nav-text'>
							<div className='text-grp'>
								<NavLink to={"/crew"}>
									<a>
										<strong className='number'>02</strong> CREW
									</a>
									<span className='bottom-div'></span>
								</NavLink>
							</div>
						</li>
						<li className='nav-text'>
							<div className='text-grp'>
								<NavLink to={"/tech"}>
									<a>
										<strong className='number'>03</strong> TECHNOLOGY
									</a>
									<span className='bottom-div'></span>
								</NavLink>
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default NavBar
