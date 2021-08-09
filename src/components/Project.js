import * as React from 'react'
import { MDXRenderer } from "gatsby-plugin-mdx"
import Modal from 'react-modal'

class Project extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		}
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	componentDidMount() {
		Modal.setAppElement(document.body)
	}
	openModal () {
		this.setState({ showModal: true })
	}
	closeModal () {
		this.setState({ showModal: false })
	}
	render() {
		return(
			<div>
				<div
					className="project-box pt-0 pl-0"
					style={{
						background: `url(${this.props.image})`,
						backgroundSize: '100% 100%'
					}}
					role="button"
					tabIndex="0"
					onClick={this.openModal}
					
				>
					<div className="columns is-vcentered hidden m-0"
						style={{
							backgroundColor: 'rgba(255, 255, 255, .5)',
							height: '100%',
							width: '100%'
						}}
					>
						<div className="column is-12">
							<div className="content is-medium has-text-centered">
								<h2 id="title">
									{this.props.title}
								</h2>				
							</div>
						</div>
					</div>	
				</div>	
				<Modal
					isOpen={this.state.showModal}
					onRequestClose={this.closeModal}
					contentLabel="Project description"
					className="modal is-active"
					onAfterOpen={() => {
						document.body.style.top = `-${window.scrollY}px`
						document.getElementsByTagName("HTML")[0].style.overflowY = 'hidden'
					}}
					onAfterClose={() => {
						const scrollY = document.body.style.top
						document.body.style.top = ''
						window.scrollTo(0, parseInt(scrollY || '0') * -1)
						document.getElementsByTagName("HTML")[0].style.overflowY = 'scroll'
					}}
				>
					<div>
						<div className="modal-background"/>
						<div className="modal-content ml-0 mr-0">
							<div className="columns is-centered ml-0 mr-0">
								<div className="column is-12 p-5">
									<p className="title is-family-secondary">
										{this.props.title}
									</p>
								</div>
							</div>
							<div className="columns is-centered mr-0 ml-0">
								<div className="column is-12 p-5 has-text-white">
									<div className="content">
										<MDXRenderer>
											{this.props.body}
										</MDXRenderer>
									</div>
								</div>
							</div>
						</div>
					</div>					
					<button
						className="modal-close is-large"
						onClick={this.closeModal}
						aria-label="Close"
					/>
				</Modal>
			</div>
		)
	}
}

export default Project