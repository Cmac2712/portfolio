import axios from 'axios';
import App from '../components/App.js'
import '../scss/styles.scss'

const Test = props => {
	return <p {...props}>Test Component {props.meta.title}</p>
};

class Index extends React.Component {

	constructor(props) {
		super(props)

		// Set initial props
		this.state = {
			meta: { title: "" }, 
			navigation: { links: [] }, 
			sectionHeader: {},
			sectionSkills: { skills: [] }, 
			sectionAbout: {}, 
			sectionExperience: {}
			
		}

	}	

	componentDidMount() {
		axios.get('/api/data')
			.then((res) => {
				const data = res.data;
				this.setState(data);
			});
	}
	
	render () {
		return (
			<App {...this.state} />
		)
	}
}

export default Index
