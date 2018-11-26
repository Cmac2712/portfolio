import Link from 'next/link'

class Footer extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			year: new Date().getFullYear()
		}
	}
	
	render () {
		
		return (
			<footer className="site-footer">
				<div className="wrap">
					<ul className="social">
						<li>
							<Link href="https://github.com/Cmac2712">
								<a className="social__github" target="_blank">
									<img src="../static/images/svg/github.svg" alt="GitHub" />
								</a>
							</Link>
						</li>
					</ul>
					<div className="copyright copyright__footer">
						&copy; Craig MacIntyre {this.state.year}
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer
