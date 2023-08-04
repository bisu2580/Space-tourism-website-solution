import NavBar from "../navigationbar"
import "./style.scss"
const Home = () => {
	return (
		<div className='container'>
			<NavBar />
			<div className='main-content'>
				<div className='left'>
					<h5 className='subheading'>SO,YOU WANT TO TRAVEL TO</h5>
					<h1 className='heading'>SPACE</h1>
					<p className='description'>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
				<div className='right-floating-circle'>
					<p>EXPLORE</p>
				</div>
			</div>
		</div>
	)
}

export default Home
