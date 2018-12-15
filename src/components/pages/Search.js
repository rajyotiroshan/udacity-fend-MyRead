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
  this.setState({searchQuery: query});
};

componentDidUpdate(preProps,preState){//searchQuery is changed.
  console.log(this.state.searchQuery);
  //search from the BooksAPI against updated searchQuery
 // if(!this.state.searchQuery ) return;
  let query = this.state.searchQuery;
  if(query===''){//avoid 401 error
    query = ' ';
  }
  if(preState.searchQuery!== this.state.searchQuery){//avoid infinite loop.
  BooksAPI.search(query).then((resp)=>{
    //either resp is undefined or no book matched.
    //make resp and empty array.
    resp = !resp || resp.error?[]:resp;
    //console.log(resp);
    this.setState({searchResults:resp.filter((book)=>book.imageLinks&&book.imageLinks.thumbnail)});
  }).catch((error)=>{
    //console.log(error);
  });
}
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
                     (
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