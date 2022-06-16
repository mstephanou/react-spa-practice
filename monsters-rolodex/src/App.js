import { Component } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';

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
        <input
          // search box for filtering monster
          type='search'
          className='search-box'
          placeholder='Find a monster'
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monster) => {
          // keys for mapping are very important for re-rendering components on the page
          // When using map() make sure that the top level div has a key with the id value
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
