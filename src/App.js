// import React from 'react'
// import * as BooksAPI from './BooksAPI'
// import SearchBooks from './SearchBooks.js'
// import Books from './Books.js'
// import Book from './Book.js'
// import './App.css'
//
// class BooksApp extends React.Component {
//         state = {
//             /**
//              * TODO: Instead of using this state variable to keep track of which page
//              * we're on, use the URL in the browser's address bar. This will ensure that
//              * users can use the browser's back and forward buttons to navigate between
//              * pages, as well as provide a good URL they can bookmark and share.
//              */
//             data: []
//                 //showSearchPage: false
//         }
//
//         componentDidMount() {
//                 BooksAPI.getAll().then(data => {
//                     this.setState({
//                         data: data
//                     });
//                 });
//             }
//             // move book function
//         moveBook = (book, shelf) => {
//             BooksAPI.update(book, shelf)
//         }
//         render() {
//                 return ( <
//                     div className = "app" > {
//                         this.state.showSearchPage ? ( < SearchBooks /> ) : ( < Books data = { this.state.data }
//                             /> ) } <
//                             Book books = { this.state.books }
//                             // onMoveBook={this.moveBook}
//                             /> </div >
//                         )
//                     }
//                 }
//
//
//                 export default BooksApp
import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks.js'
import Books from './Books.js'
import Book from './Book.js'
import './App.css'

class BooksApp extends React.Component {
        state = {
            data: [],
            showSearchPage: false
        }

        componentDidMount() {
                BooksAPI.getAll().then(data => {
                    this.setState({
                        data: data
                    });
                });
            }
            // move book function
        moveBook = (book, shelf) => {
            BooksAPI.update(book, shelf)
            // you have to add .then
        }
        render() {
                return (
                  <div className = "app" > {
                        this.state.showSearchPage ?
                         ( < SearchBooks /> ) :
                         ( < Books data = { this.state.data }/> ) }
                 </div>
                        )
                    }
                }
export default BooksApp
