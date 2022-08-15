import React from "react"
class Experience extends React.Component {

	constructor (props) {
		super(props)
		this.ref = React.createRef()
	}

	componentDidMount() {
		const id = this.props.id
		
		this.props.offsets.push({
			id: id, 
			offset: (this.ref.current.offsetTop - this.ref.current.height)
		})
	}

	render () {
		return (
			<section
				id={this.props.id}
				className="experience"
				ref={this.ref}
			>
				<div className="wrap">
					<h3 className="exp__header">{this.props.title}</h3>
					<span className="exp_duration">
						{this.props.duration}
					</span>
					{
						this.props.roles.map(role => (
							<div className='role'>
								<h4 className='role__header'>{role.title}</h4>
								<p className="role__desc ">{role.description}</p>
							</div>
						))
					}
					<a href="https://docs.google.com/document/d/1dFukPSACNZZEWXl6ad2p3joUJUX0vz9IGrTzKmaSYuQ/edit?usp=sharing" className="download">{this.props.downloadLinkText}</a>
				</div>
			</section>
		)
	}
}

export default Experience
