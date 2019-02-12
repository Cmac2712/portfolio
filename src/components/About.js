class About extends React.Component {

	constructor (props) {
		super(props)
		this.ref = React.createRef()
	}

	componentDidMount() {
		const id = this.props.id

		console.dir(this.ref.current)
		
		this.props.offsets.push({
			id: id, 
			offset: this.ref.current.offsetTop
		})
	}
	
	render () {
		return (
			<section
				id={this.props.id}
				className="about"
				ref={this.ref}
			>
				<div className='wrap'>
					<h3 className="about__header">{this.props.title}</h3>
					<p className="about__desc">{this.props.description}</p>
				</div>
			</section>
		)
	}
}

export default About
