import React from 'react';
import Link from 'next/link'
import Router, { withRouter } from 'next/router'


const linkStyle = {
	marginRight: 15
}

class Header extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {
		return (
			<header className="site-header">
				<div className='wrap'>
					<h1 
						className="site-intro"
						dangerouslySetInnerHTML={ { __html: this.props.intro } }
					>
					</h1>
					{this.props.children}
				</div>
			</header>
		)
	}
}

export default Header
