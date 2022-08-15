import React from 'react'
import posed from 'react-pose'

const NavPosed = posed.nav({
	active: {
		applyAtStart: { opacity: 0 }, 
		opacity: 1
	},
	inactive: {
		applyAtStart: { opacity: 0 }, 
		opacity: 1
	}
})

class Nav extends React.Component {

	constructor(props) {
		super(props)

		this.handleClick = this.handleClick.bind(this)
	}

	componentDidMount() {
		// Avoid testing scroll-to as enzyme won't be able to render this component
		if (process.env.NODE_ENV === 'test') return;

		// We need 'require' here because we're using server-side rendering
		this.scrollTo = require('react-scroll-to-component')
	}

	handleClick(link) {
		this.props.changeSection(link.href)
	}

	render () {
		return (
			<div className='nav-container'>
				<NavPosed pose={this.props.isVisible ? 'inactive' : 'active'}>
					<nav className={this.props.isVisible ? "main-nav" : "main-nav main-nav--fixed"}>
							<div className='wrap'>
								{this.props.links.map((link, i) => {
									return (
										<a className={this.props.currentSection === link.name.toLowerCase() ? "main-nav__link active" : "main-nav__link"}
										   key={i}
										   href={link.href}
											onClick={(event) => {
												event.preventDefault()
												this.handleClick(link)
											}}>
										   {link.name}
										</a>
									)
								})}
							</div>
					</nav>
				</NavPosed>
			</div>
		)
	}

}

export default Nav
