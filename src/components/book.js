import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'
class Book extends Component {
  /*
  props={
  book,
  key,
  shelfChange(func)
  }
  */
state = {};
shelfChange = (e)=>{
  //console.log(book);
  //console.log(e.target.value);
  if(this.props.fromSearch){
    BooksAPI.update(this.props.book, e.target.value);
    this.setState({});
    return;
  }
  this.props.onShelfChange(this.props.book,e.target.value);
};
	render() {
   
   if(!this.props.book.shelf){//shelf is not defined.
      this.props.book.shelf = "none";
   }

		return (
    <li key={this.props.book.id}>
			<div className="book">
          <div className="book-top">
                <div className="book-cover" 
                	style={
                          { width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}
                        }>
                </div>
                    <div className="book-shelf-changer">
                      <select  value={this.props.book.shelf} onChange={this.shelfChange}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
          </div>
      </li>
		)
	}
}

export default Book