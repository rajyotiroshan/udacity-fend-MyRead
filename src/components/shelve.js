import React, {Component} from 'react'
import Book from './book'

class Shelf extends Component {
	render() {
    console.log(this.props.books);
		return (
				<div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        { 
                          this.props.books.map(function(book){
                            return <Book book={book} key={book.id}/>
                          })
                        }
                    </ol>
                  </div>
          </div>

			)
	}
} 

export default Shelf