import { Component } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';
import './App.css';

class App extends Component {
  // 1 - constructor method for initialising state
  constructor() {
    super();
    // Initial monsters value is an empty array
    // searchField value is an empty string
    //state should start witht he full list of monsters
    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentdidmount');
    // 3 - componentdidmount method using promises to make API calls and mounts to DOM for rendering
    // Once component mounts fetch the new users, call setState, then re-render
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    console.log('render');
    // destructured objects in ES6 makes it easier to read and a performance improvement
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    // Filter takes a boolean, return value if monster name includes the search string in the search box
    // It is not case sensititve so we need a new variable that converts searchField to lowercase
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    // 2
    return (
      <div className='App'>
        <SearchBox
          className='monsters-search-box' // className prop == 'search-box' to be passed to other components
          onChange={onSearchChange} // passing props to other components from here | onChange prop = {onSearchChange} event handler
          placeholder='search monsters' // passing props to other components from here | placeholder prop = 'search monsters'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
