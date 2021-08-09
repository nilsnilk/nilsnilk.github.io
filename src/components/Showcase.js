import * as React from 'react'
import Project from './Project'

const Showcase = ({ projects }) => {
	return(		
		<div className="columns is-multiline is-gapless has-background-black-ter">
			{projects.nodes.map(project => (
				<div className="column is-4" key={project.id}>
					
					<Project
							title = {project.frontmatter.title}
							image = {project.frontmatter.image}
							body = {project.body}
						/>
				
				</div>
			))}
		</div>
	)
}

export default Showcase