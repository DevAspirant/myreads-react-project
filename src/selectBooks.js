// This is the
import React from 'react'

class selectBooks extends React.Component {
  render() {
    return (<div className="book-shelf-changer">
      <select value={this.props.data.shelf}>
        <option value="none" disabled="disabled">Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>)
  }
}
export default selectBooks
