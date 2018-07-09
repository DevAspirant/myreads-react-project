// This file will change the book states from currentlyReading, wantToRead, Read.
// when the user want to chage the shelf
import React from 'react'
import Books from './Books.js'

class Book extends React.Component {

        handleMove(book, event) {
            this.props.onMoveBook(book, event.target.value);
        }

        render() {
            return ( <
                li >
                <
                div className = "book" >
                <
                div className = "book-top" >
                <
                div className = "book-cover"
                style = {
                    { width: 128, height: 180, backgroundImage: 'url(' + this.props.data.imageLinks.thumbnail + ')' }
                } > < /div> <
                div className = "book-shelf-changer" >
                <
                select value = { this.props.data.shelf }
                onChange = { this.handleMove.bind(this, book) } >
                <
                option value = "none"
                disabled > Move to... < /option> <
                option value = "currentlyReading" > Currently Reading < /option> <
                option value = "wantToRead" > Want to Read < /option> <
                option value = "read" > Read < /option> <
                option value = "none" > None < /option> < /
                select > <
                /div> < /
                div > <
                div className = "book-title" > { this.props.data.title } < /div> {
                this.props.data.authors.map((author) => < div className = "book-authors" > { author } < /div>)} < /
                    div > <
                    /li>
                )
            }
        }

        export default Book