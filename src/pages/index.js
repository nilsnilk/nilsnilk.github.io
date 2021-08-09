import { graphql } from "gatsby"
import * as React from "react"
import Layout from '../components/Layout'
import Showcase from "../components/Showcase"
import "../mystyles.scss"
import me_graph from "../images/me_graph.png"

const IndexPage = ({ data }) => {
	const projects = data.allMdx
	return (
		<Layout pageTitle="Nils Sundbergs Portfolio" id="main">
			<section className="hero is-fullheight has-background-grey is-dark">
				<div className="hero-body">
					<div className="container has-text-right pr-3">
						<p className="title is-family-secondary">
							Nils Sundberg
						</p>
						<p className="subtitle">
							Interaction Designer
						</p>
					</div>
					<div className="container has-text-left pl-3">
						<figure className="image is-128x128">
							<img src={me_graph} alt="Depicting Nils Sundberg"/>
						</figure>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="columns is-centered has-text-white">
					<div className="column is-4 p-5">
						<h3 className="title">Introduction</h3>
						<p className="block">
							My name is Nils Sundberg and I live in Umeå, Sweden. 
							Currently, I study at Umeå University where I attend 
							a Master of Science programme in interaction design.
						</p>
						<p className="block">
							Through my education I've been trained to design, 
							build and test software. Also, 
							I'm trained in both front-end and back-end development. 
						</p>
					</div>
					<div className="column is-4 p-5">
						<h3 className="title">Interests</h3>
						<p className="block">
							I've always been interested in computer related things in general.
							During my education I've developed an interest in more programming-related
							things in particular. 
						</p>
						<p className="block">
							Ever since I was little I've been interested in painting and 
							drawing. This interest made me choose a secondary school education 
							with focus on visual arts, and also eventually played a 
							part when I chose to study interaction design. 
						</p>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="columns is-centered mb-6">
					<div className="column is-8 p-5">
						<h3 className="title">Skillset</h3>
						<div className="columns is-centered">
							<div className="column is-4">
								<div className="container has-text-centered">
									<p className="subtitle">React</p>
								</div>
							</div>
							<div className="column is-4">
								<div className="container has-text-centered">
									<p className="subtitle">C#.NET</p>
								</div>
							</div>
							<div className="column is-4">
								<div className="container has-text-centered">
									<p className="subtitle">HTML</p>
								</div>
							</div>
						</div>
						<div className="columns is-centered">
							<div className="column is-4">
								<div className="container has-text-centered">
									<p className="subtitle">CSS</p>
								</div>
							</div>
							<div className="column is-4">
								<div className="container has-text-centered">
									<p className="subtitle">JavaScript</p>
								</div>
							</div>
							<div className="column is-4">
								<div className="container has-text-centered">
									<p className="subtitle">Java</p>
								</div>
							</div>
						</div>
						<div className="columns is-centered">
							<div className="column is-4">
								<div className="container has-text-centered">
									<p className="subtitle">Photoshop</p>
								</div>
							</div>
							<div className="column is-4">
								<div className="container has-text-centered">
									<p className="subtitle">Illustrator</p>
								</div>
							</div>
							<div className="column is-4">
								<div className="container has-text-centered">
									<p className="subtitle">Gimp2</p>
								</div>
							</div>	
						</div>
						<div className="columns is-centered">
							<div className="column is-4">
								<div className="container has-text-centered">
									<p className="subtitle">Inkscape</p>
								</div>
							</div>
							<div className="column is-4">
								<div className="container has-text-centered">
									<p className="subtitle">Unity</p>
								</div>
							</div>
							<div className="column is-4">
								<div className="container has-text-centered">
									<p className="subtitle">Axure</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="columns is-centered has-text-white">
					<div className="column is-4 p-5">
						<p className="title">Projects</p>
					</div>
					<div className="column is-4 p-5">
						
					</div>
				</div>
			</section>
			<div className="columns is-gapless is-centered">
				<div className="column is-12">
					<Showcase projects = {projects}/>
				</div>
			</div>
		</Layout>
	
	)
}

export const query = graphql`
	query {
		allMdx {
			nodes {
				id
				frontmatter {
					title
					image
				}
				body
			}
		}
	}
`

export default IndexPage
