import React from 'react';
import App from '../components/App.js';

export async function getStaticProps() {
  const res = await fetch('https://craigmacintyre.co.uk/api/data')
  const data = await res.json()

  return {
    props: data
  }
}

const Index = props => {
	return <Index {...props} />;
}

export default Index
