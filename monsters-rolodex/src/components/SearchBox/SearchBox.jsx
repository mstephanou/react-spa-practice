
import '../SearchBox/SearchBox.styles.css';


const SearchBox = (className, placeholder, onChange) => { // props parameter passed in
// implicit return
      <input
          // search box for filtering monster
          type='search'
          className={`search-box ${className}`} // prop grabbed from app.js
          placeholder={placeholder} // props grabbed form app.js
          onChange={onChange} // props grabbed from app. js
        />
    
  }


export default SearchBox;