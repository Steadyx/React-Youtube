import React, { Component } from 'react';

class Navigation extends Component {
	constructor( props ) {
		super( props )

		this.state = {
			term: null
		}
	}
	render( ) {
		return (
			<header className="header-container">
				<div className="header">
					<ul className="header-row">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Search</a>
						</li>
						<li>
							<a href="#">Favorites</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
					</ul>
				</div>
			</header>
		)
	}
}

export default Navigation;
