// this is the first page that shown to the user 
import React from 'react'
import BooksShelf from './BooksShelf.js'

class Books extends React.Component {

  render () {
	return(
    <div className="list-books">
      <div className="list-books-title">
              <h1>MyReads</h1>
      </div>
    <div className="list-books-content">
              <div>
      <BooksShelf title={'Currently Reading'} data={this.props.data.filter((book)=> book.shelf === 'currentlyReading')}/>
      <BooksShelf title={'Want to Read'} data={this.props.data.filter((book)=> book.shelf === 'wantToRead')}/>
      <BooksShelf title={'Read'} data={this.props.data.filter((book)=> book.shelf === 'read')}/>

      </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
</div>
 )}

}
export default Books
