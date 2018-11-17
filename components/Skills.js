class Skills extends React.Component {

	constructor(props) {
		super(props)
		this.ref = React.createRef()
	}

	componentDidMount() {
		const id = this.props.id
		
		this.props.offsets.push({
			id: id, 
			offset: this.ref.current.offsetTop
		})
	}
	
	render () {
		return (
			<section
				id={this.props.id}
				className="skills"
				ref={this.ref}
			>
				<div className='wrap'>
					<h3 className="skills__header">{this.props.title}</h3>
					<ul className="skills__grid">
						{this.props.skills.map((skill, i) => {
							return (
								<li key={i} className="skill">
									<div className='skill__image'>
										<img src={skill.image} alt={skill.name} />
									</div>
									<p className="skill__name">{skill.name}</p>
								</li>
							)
						})}
					</ul>
				</div>
			</section>
		)
	}
}

export default Skills
