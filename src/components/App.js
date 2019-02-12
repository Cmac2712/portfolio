import Header from './Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Head from 'next/head';
import TrackVisibility from 'react-on-screen';
import posed from 'react-pose';
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
		super(props)

		this.state = {
			currentSection: 'top', 
			isScrolling: false, 
			// Page offest for each section; this will help the page scroll to the correct
			// section when a link is clicked
			offsets: [
				{
					id: "header", 
					offset: 0
				}
			]
		}

		// Make sure we bind the context of 'this' to the class
		this.changeSection = this.changeSection.bind(this)
		this.handleScroll = this.handleScroll.bind(this)
	}

	/**
	 * Update the calue of 'currentSection' so the menu links can change color 
	 */
	handleScroll() {
		var pos = window.scrollY
		const adjust = 300 
		const atBottom = (document.documentElement.scrollTop + window.innerHeight) === document.documentElement.offsetHeight

		if (this.state.isScrolling) { return false; }

		if (atBottom) {
			this.setState({
				currentSection: this.state.offsets[this.state.offsets.length -1].id
			})
			
			return;
		}

		this.state.offsets.forEach(section => {
			
			if (pos > (section.offset - adjust) && this.state.currentSection !== section.id) {
				 this.setState({
				 	currentSection: section.id
				 })
			}
		}) 

	}

	componentDidMount() {
		this.scrollToComponent = require('react-scroll-to-component').bind(this)
		window.addEventListener('scroll', this.handleScroll)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}

	/**
	 * Handle the page scroll when a user clicks a menu item.
	 */
	changeSection(href) {
		href = href.substr(1)
		
		this.setState({
			currentSection: href 
		}, () => {
			this.setState({ isScrolling: true })
			this.scrollToComponent(this[href + "Ref"], { offset: 0, align: 'middle', duration: 500, ease:'inCirc' });
			setTimeout(() => {
				this.setState({ isScrolling: false })
			}, 1000)
		})
	}

	render () {
		return (
			<div>
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
					<TrackVisibility>
						<Nav
						  {...this.props.navigation}
						  {...this.state}
						  changeSection={this.changeSection} />
					</TrackVisibility>
				</Header>
				<About 
					{...this.props.sectionAbout}
					{...this.state}
					ref={(section) => { this.aboutRef = section }}
				/>
				<Skills 
					{...this.props.sectionSkills}
					{...this.state}
					ref={(section) => { this.skillsRef = section }}
				/>
				<Experience
					{...this.props.sectionExperience}
					{...this.state}
					ref={(section) => { this.experienceRef = section }}
				/>
				<Footer/>
			</div>
		)
	}
}

export default App;
