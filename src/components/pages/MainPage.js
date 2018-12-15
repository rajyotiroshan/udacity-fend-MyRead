import React , {Component} from 'react'
import Shelf from '../shelve'
import { Link } from 'react-router-dom' 
import * as BooksAPI from '../../BooksAPI'
class MainPage extends Component {
  state = {
    books:[]
  };

  componentDidMount(){
    //get all sheved books on main page.
     BooksAPI.getAll().then((res)=>{
      this.setState({books:res}); //update state with books response.
    });
  }

shelfChange=(book,newShelf)=>{
  //console.log(book);
  //console.log(newShelf);
  BooksAPI.update(book,newShelf);//update state with books response.
  BooksAPI.getAll().then((res)=>{
      this.setState({books:res}); //update state with books response.
    });
};
  //get currently shelved books.
	render() {
    //console.log(this.state.books);
		return (
			<div className="list-books">        
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            
            <div className="list-books-content">
              
                {
                //pass books to their shelf
                } 
               { this.state.books && 
                  (<div> <Shelf books={ this.state.books.filter((book)=> book.shelf === "currentlyReading")} name="Currently Reading" onShelfChange={this.shelfChange}/>
                  <Shelf books={ this.state.books.filter((book)=> book.shelf === "read")} name="Read" onShelfChange={this.shelfChange}/>
                  <Shelf books={ this.state.books.filter((book)=> book.shelf === "wantToRead")} name="Want To Read" onShelfChange={this.shelfChange}/>
                </div> )
                }
             
            </div>

            <div className="open-search">
              	<Link to="/search">Add Contact</Link>
            </div>
          </div>
			)
	}
}

export default MainPage