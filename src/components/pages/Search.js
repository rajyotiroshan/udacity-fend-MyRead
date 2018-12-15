import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from '../book'
class SearchPage extends Component {
  /*
    props={
  
    }
  */
  state = {
    searchQuery:'',
    searchResults:[]
  }

updateQuery = (query) => {
  this.setState({searchQuery: query.trim()});
}

componentDidUpdate() {
  //console.log(this.state.searchQuery);
  //search from the BooksAPI against updated searchQuery
 // if(!this.state.searchQuery ) return;
  BooksAPI.search(this.state.searchQuery).then((resp)=>{
    resp=resp?resp:[];
    this.setState({searchResults:resp});
  }).catch((error)=>{
    console.log("np respone error");
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
                     onChange={(event)=>this.updateQuery(event.target.value)} value={this.state.searchQuery}/>
              	 	</div>
            	</div>
            	<div className="search-books-results">
              		<ol className="books-grid">
                  {
                    (this.state.searchResults && this.state.searchResults.length>0) && (
                        this.state.searchResults.map((book)=>{
                          return <Book key={book.id} book={book} fromSearch={true}/>
                        })
                      )
                  }
                  </ol>
            	</div>
          	</div>
		)
	}
}

export default SearchPage