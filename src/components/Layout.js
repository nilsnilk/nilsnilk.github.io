import * as React from 'react'
import '../mystyles.scss'
import Footer from './Footer'

const Layout = ({ pageTitle, children }) => {
	return (
		<div className="has-background-dark">
		{/* <div className="has-navbar-fixed-top">
			 <Navbar/> */}
				<title>{pageTitle}</title> 
				<main>{children}</main>
			<Footer/>
		</div>
	)
}

export default Layout