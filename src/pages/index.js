import axios from 'axios';
import App from '../components/App.js';
import '../scss/styles.scss';

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

		const protocol = process.env.NODE_ENV === 'LIVE' ? 'https' : 'http';

		axios.get(protocol + '://localhost:8000/api/data')
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
