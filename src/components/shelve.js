import React, {Component} from 'react'
import Book from './book'

class Shelf extends Component {
  /*

  props= {
    books(arr)
    name(str)
    onShelfChange
  }
*/
shelfChange = (book,newShelf)=>{
  //console.log(book);
  //console.log(newShelf);
  this.props.onShelfChange(book,newShelf);
};
	render() {
    //console.log(this);
		return (
				<div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        { 
                          this.props.books.map((book)=>{
                            return <Book book={book} key={book.id} onShelfChange={this.shelfChange}/>
                          })
                        }
                    </ol>
                  </div>
          </div>

			)
	}
} 

export default Shelf