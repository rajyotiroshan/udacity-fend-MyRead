import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
class SearchPage extends Component {
  state = {
    searchQuery:'',
    searchResults:[]
  }

updateQuery = (query) => {
  this.setState({searchQuery: query.trim()});
}

componentDidMount() {
  //search from the BooksAPI against updated searchQuery
  BooksAPI.search(this.state.searchQuery).then((resp)=>{
    this.setState({searchResults:resp});
  });
}

	render() {
		return (
			<div className="search-books">
            	<div className="search-books-bar">
              		<Link className="close-search" 
              				to="/">Close</Link>
              		<div className="search-books-input-wrapper">
               		   <input type="text" placeholder="Search by title or author" 
                     onChange={(event)=>this.updateQuery(event.target.value)}/>
              	 	</div>
            	</div>
            	<div className="search-books-results">
              		<ol className="books-grid">
                  {
                    this.state.searchQuery
                  }
                  </ol>
            	</div>
          	</div>
		)
	}
}

export default SearchPage