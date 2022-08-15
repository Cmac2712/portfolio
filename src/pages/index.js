import React from 'react';
import axios from 'axios';
import App from '../components/App.js';
//import '../scss/styles.scss';
import Loading from '../components/Loading';


export async function getStaticProps() {
  const res = await fetch('https://craigmacintyre.co.uk/api/data')
  const data = await res.json()

  console.log('here we go');

  return {
    props: data
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
