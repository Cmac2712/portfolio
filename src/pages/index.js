import React from 'react';
import axios from 'axios';
import App from '../components/App.js';
//import '../scss/styles.scss';
import Loading from '../components/Loading';


export async function getServerSideProps() {
  const res = await fetch('https://www.craigmacintyre.co.uk/api/data')
  const props = await res.json()

  return {
	props
  }
}
class Index extends React.Component {

	constructor(props) {
		super(props)
	}	
	
	render () {
		return  <App {...this.props} />;
	}
}

export default Index
