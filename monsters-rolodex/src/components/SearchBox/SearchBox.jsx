import { Component } from "react";

class SearchBox extends Component {


  render() {
    return (
      <input
          // search box for filtering monster
          type='search'
          className='search-box'
          placeholder='Find a monster'
          onChange={onSearchChange}
        />
    )
  }
}

export default SearchBox;