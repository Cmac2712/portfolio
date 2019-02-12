import axios from 'axios';
import App from '../components/App.js';
import '../scss/styles.scss';
import Loading from '../components/Loading';

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
			sectionExperience: {}, 
			loading: true
			
		}

	}	

	componentDidMount() {

		axios.get('https://craigmacintyre.co.uk/api/data')
			.then((res) => {
				const data = res.data;
				this.setState({
					...data, 
					loading: false
				});
			});

	}
	
	render () {

		if (this.state.loading) return <Loading/>;
		
		return  <App {...this.state} />;
	}
}

export default Index
