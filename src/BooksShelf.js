// this file is for the Books shelf by title and book data
import React from 'react'
import Book from './Book.js'


class BooksShelf extends React.Component {

render(){
return(
 <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid"> {this.props.data.map((book) =>  <Book data={book}/>)}</ol>
                  </div>
                </div>
)}
}
export default BooksShelf
