import React, { Component } from 'react';

class SearchBar extends Component {
	constructor( props ) {
		super( props )

		this.state = { term: '' };

		this.renderSearch = this.renderSearch.bind( this );
	}
	renderSearch( term ) {
		this.setState( { term } )
		this.props.onSearchTermChange( term );
	}
	render() {
		return (
			<div className="form-container">
				<form >
					<div className="form-flex">
						<div className="col-1">
							<label>Search Videos!</label>
						</div>
						<div className="col-1">
							<input type="text" onChange={event => this.renderSearch( event.target.value )} value={this.state.term}/>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar
