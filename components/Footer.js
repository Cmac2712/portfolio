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
					<div className="copyright copyright__footer">
						&copy; Craig MacIntyre {this.state.year}
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer
