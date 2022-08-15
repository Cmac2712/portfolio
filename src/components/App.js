import React from 'react';
import Header from './Header';
import About from '../components/About';
import Footer from '../components/Footer';
import Head from 'next/head';
import PropTypes from 'prop-types';

class App extends React.Component {

	// Make sure the data we get looks correct
	static propTypes = {
		meta: PropTypes.shape({
			title: PropTypes.string.isRequired
		}), 
		navigation: PropTypes.shape({
			links: PropTypes.array
		}),
		sectionHeader: PropTypes.object.isRequired,
		sectionSkills: PropTypes.shape({
			skills: PropTypes.array.isRequired
		}),
		sectionAbout: PropTypes.object.isRequired,
		sectionExperience: PropTypes.object.isRequired,
		loading: PropTypes.bool
	} 

	constructor(props) {
		console.log('data: ', data)
		super(props)
	}

	render () {
		return (
			<div class="viewport">
				<Head>
					<title>{this.props.meta.title}</title>
					<meta name="viewport" content="width=device-width, initial-scale=1"/>
					<link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,700" rel="stylesheet" />
					<script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-WMQCK3W');`}}/>
				</Head>
				<noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WMQCK3W" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />
				<Header
					{...this.props.sectionHeader}
					ref={(section) => { this.headerRef = section }}
				> 
				</Header>
				<About
					{...this.props.sectionAbout}
				/>
				{/* <Experience
					{...this.props.sectionExperience}
					{...this.state}
					ref={(section) => { this.experienceRef = section }}
				/> */}
				<Footer/>
			</div>
		)
	}
}

export default App;
