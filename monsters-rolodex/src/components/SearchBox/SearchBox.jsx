import { Component } from "react";
import '../SearchBox/SearchBox.styles.css';


class SearchBox extends Component {


  render() {
    return (
      <input
          // search box for filtering monster
          type='search'
          className={`search-box ${this.props.className}`} // prop grabbed from app.js
          placeholder={this.props.placeholder} // props grabbed form app.js
          onChange={this.props.onChange} // props grabbed from app. js
        />
    )
  }
}

export default SearchBox;