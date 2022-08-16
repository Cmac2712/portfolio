import React from "react"
import Link from 'next/link'
import Image from "next/image"
class About extends React.Component {

	constructor (props) {
		super(props)
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
					<ul className="social">
						<li>
							<Link href="https://github.com/Cmac2712">
								<a className="social__github" target="_blank">
									<Image
										src={"/static/images/svg/github.svg"} 
										height={24}
										width={24}
										alt="GitHub"
									/>
									<span>GitHub</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href="https://www.linkedin.com/in/craig-macintyre-8b4059b0/">
								<a className="social__linkedin" target="_blank">
									<Image
										src={"/static/images/svg/linkedin.svg"} 
										height={24}
										width={24}
										alt="LinkedIn"
									/>
									<span>LinkedIn</span>
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</section>
		)
	}
}

export default About
