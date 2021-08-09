import * as React from 'react'
import '../mystyles.scss'
import FeatherIcon from 'feather-icons-react'

const Footer = class extends React.Component {
	render(){
		return (
			<footer className="footer has-background-grey">
				<nav className="level is-mobile">
					<div className="level-item">
						<a href="https://www.facebook.com/nils.sundberg.54/" target="_blank" rel="noreferrer">
							<FeatherIcon icon="facebook" color="white"/>
						</a>
					</div>
					<div className="level-item">
						<a href="https://www.linkedin.com/in/nils-sundberg-889759146/" target="_blank" rel="noreferrer">
							<FeatherIcon icon="linkedin" color="white"/>
						</a>
						
					</div>
					<div className="level-item">
						<a href="https://www.instagram.com/nilsnilk/" target="_blank" rel="noreferrer">
							<FeatherIcon icon="instagram" color="white"/>
						</a>
					</div>
					<div className="level-item">
						<a href="https://github.com/nilsnilk" target="_blank" rel="noreferrer">
							<FeatherIcon icon="github" color="white"/>
						</a>
					</div>
					<div className="level-item">
						<a href="mailto:nisu090@protonmail.com" target="_blank" rel="noreferrer">
							<FeatherIcon icon="mail" color="white"/>
						</a>
					</div>
				</nav>
				
				{/* <div className="columns is-centered has-text-white">
					<div className="column is-4">
						<div className="content">
							
						</div>
					</div>
					<div className="column is-4">
						
					</div>
				</div> */}
			</footer>
		)
	} 
}

export default Footer