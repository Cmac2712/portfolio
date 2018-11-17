import App from '../components/App.js'
import '../scss/styles.scss'

class Index extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			meta: {
				title: "Craig MacIntyre | Web Developer"
			}, 
			navigation: {
				links: [
				{
					name: 'About', 
					href: '#about'
				},
				{
					name: 'Skills', 
					href: '#skills'
				},
				{
					name: 'Experience', 
					href: '#experience'
				} 
				]
			}, 
			sectionHeader: {
				intro: 'Hi I\'m Craig &', 
				tagline: 'I build websites.'
			},
			sectionSkills: {
				id: 'skills', 
				title: 'Skills', 
				skills: [
					{
						name: 'HTML5', 
						image: './static/images/html5.png'
					}, 
					{
						name: 'CSS3', 
						image: './static/images/css3.png'
					}, 
					{
						name: 'JavaScript', 
						image: './static/images/javascript.png'
					}, 
					{
						name: 'React', 
						image: './static/images/react.png'
					}, 
					{
						name: 'PHP', 
						image: './static/images/php.png'
					}, 
					{
						name: 'Magento', 
						image: './static/images/magento.png'
					}, 
				] 
			}, 
			sectionAbout: {
				id: 'about', 
				title: 'About', 
				description: 'I\'m a Magento Certified Front-End Developer. Along with JavaScript and am currently dabbling in React. I like to challange myself and am always eager to add to my skill-set with the aim of producing  high quality, efficiant code and clean UIs'
			}, 
			sectionExperience: {
				id: 'experience', 
				title: 'Experience', 
				expTitle: 'INDEZ Ltd – Front End Developer', 
				duration: 'April \'14 – Present', 
				description: 'Web Development Agency Based in Glasgow. Role included both back end and front end tasks: creation of bespoke Magento themes based off PSD/Sketch designs; fixing bugs/creating new features per client\'s request; creation of Magento modules to add features/fix bugs with Magento extensions', 
				downloadLink: './static/files/craig-macintyre-developer.pdf', 
				downloadLinkText: 'Download My Cv '
			}
			
		}

	}	
	
	render () {
		return (
			<App {...this.state} />
		)
	}
}

export default Index
